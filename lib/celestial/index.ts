/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2021 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module celestial
 */
import { MathHelper } from '../mathHelper';
import { PlanetarySystem, PlanetList } from './planetarySystem/index';
import { Yuga } from './planetarySystem/yuga';

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Celestial
 */
export class Celestial {
  planets: PlanetList;
  yuga: Yuga;
  backLastConjunctionAhargana: number;
  backNextConjunctionAhargana: number;
  backLastConjunctionLongitude: number;
  backNextConjunctionLongitude: number;

  constructor(system = 'SuryaSiddhanta') {
    const planetarySystem: PlanetarySystem = new PlanetarySystem(system);
    this.planets = planetarySystem.planets;
    this.yuga = planetarySystem.yuga;

    this.backLastConjunctionAhargana = -1;
    this.backNextConjunctionAhargana = -1;
    this.backLastConjunctionLongitude = -1;
    this.backNextConjunctionLongitude = -1;
  }

  static threeRelation(left: number, center: number, right: number): number {
    if (left < center && center < right) {
      return 1;
    } else if (right < center && center < left) {
      return -1;
    }
    return 0;
  }

  static declination(longitude: number): number {
    // https://en.wikipedia.org/wiki/Declination
    return Math.asin(Math.sin(longitude / MathHelper.radianInDegrees) * Math.sin(24 / MathHelper.radianInDegrees)) *
      MathHelper.radianInDegrees;
  }

  static getSunriseTime(time: number, equationOfTime: number): { sunriseHour: number; sunriseMinute: number } {
    // TODO: Add Tests if/when feasible
    const sunriseTime = (time - equationOfTime) * 24;
    const sunriseHour = MathHelper.truncate(sunriseTime);
    const sunriseMinute = MathHelper.truncate(60 * MathHelper.fractional(sunriseTime));
    return { sunriseHour, sunriseMinute };
  }

  static getTithi(trueSolarLongitude: number, trueLunarLongitude: number): number {
    let eclipticLongitude = trueLunarLongitude - trueSolarLongitude;
    eclipticLongitude = MathHelper.zero360(eclipticLongitude);

    return eclipticLongitude / 12;
  }

  setPlanetaryPositions(ahargana: number): { trueSolarLongitude: number; trueLunarLongitude: number } {
    const $planets = this.planets;

    // Lunar apogee and node at sunrise
    $planets.candrocca.MeanPosition = MathHelper.zero360(this.getMeanLongitude(ahargana, $planets.candrocca.YugaRotation) + 90);
    $planets.rahu.MeanPosition = MathHelper.zero360(this.getMeanLongitude(ahargana, $planets.rahu.YugaRotation) + 180);

    // mean and true sun at sunrise
    const meanSolarLongitude = this.getMeanLongitude(ahargana, $planets.sun.YugaRotation);
    $planets.sun.MeanPosition = meanSolarLongitude;

    const trueSolarLongitude = MathHelper.zero360(meanSolarLongitude - this.getMandaEquation(meanSolarLongitude - $planets.sun.Apogee, 'sun'));

    // mean and true moon at sunrise
    const meanLunarLongitude = this.getMeanLongitude(ahargana, $planets.moon.YugaRotation);
    $planets.moon.MeanPosition = meanLunarLongitude;

    $planets.moon.Apogee = $planets.candrocca.MeanPosition;

    const trueLunarLongitude = MathHelper.zero360(meanLunarLongitude - this.getMandaEquation(meanLunarLongitude - $planets.moon.Apogee, 'moon'));

    // The below was a separate method named calculations.planetary (ported from planetary_calculations in perl)
    const planetNames = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
    for (let i = 0; i < planetNames.length; i++) {
      $planets[planetNames[i]].MeanPosition = this.getMeanLongitude(ahargana, $planets[planetNames[i]].Rotation);
    }
    return { trueSolarLongitude, trueLunarLongitude };
  }

  getMeanLongitude(ahargana: number, rotation: number): number {
    // https://en.wikipedia.org/wiki/Mean_longitude
    // https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Spherical_coordinates
    return 360 * MathHelper.fractional(rotation * ahargana / this.yuga.CivilDays);
  }

  getDaylightEquation(year: number, latitude: number, ahargana: number): number {
    // Good read - http://en.wikipedia.org/wiki/Equation_of_time#Calculating_the_equation_of_time
    const meanSolarLongitude = this.getMeanLongitude(ahargana, this.planets.sun.YugaRotation);

    // Sayana Solar Longitude and Declination
    const sayanaMeanSolarLongitude = meanSolarLongitude + 54 / 3600 * (year - 499);
    const sayanaDeclination = Celestial.declination(sayanaMeanSolarLongitude); // See Sewell, p.10

    // Equation of day light by Analemma (https://en.wikipedia.org/wiki/Analemma)
    const x = Math.tan(latitude / MathHelper.radianInDegrees) * Math.tan(sayanaDeclination / MathHelper.radianInDegrees);

    return 0.5 * Math.asin(x) / Math.PI;
  }

  getMandaEquation(argument: number, planet: string): number {
    return Math.asin(this.planets[planet].MandaCircumference / 360 * Math.sin(argument / MathHelper.radianInDegrees)) * MathHelper.radianInDegrees;
  }

  getTrueLunarLongitude(ahargana: number): number {
    const meanLunarLongitude = this.getMeanLongitude(ahargana, this.planets.moon.YugaRotation);
    const apogee = this.getMeanLongitude(ahargana, this.planets.candrocca.YugaRotation) + 90;
    return MathHelper.zero360(meanLunarLongitude - this.getMandaEquation(meanLunarLongitude - apogee, 'moon'));
  }

  getTrueSolarLongitude(ahargana: number): number {
    const meanSolarLongitude = this.getMeanLongitude(ahargana, this.planets.sun.YugaRotation);
    return MathHelper.zero360(meanSolarLongitude - this.getMandaEquation(meanSolarLongitude - this.planets.sun.Apogee, 'sun'));
  }

  getEclipticLongitude(ahargana: number): number {
    let eclipticLongitude = Math.abs(this.getTrueLunarLongitude(ahargana) - this.getTrueSolarLongitude(ahargana));
    if (eclipticLongitude >= 180) {
      eclipticLongitude = 360 - eclipticLongitude;
    }
    return eclipticLongitude;
  }

  findConjunction(leftX: number, leftY: number, rightX: number, rightY: number): number {
    const width = (rightX - leftX) / 2;
    const centreX = (rightX + leftX) / 2;
    if (width < MathHelper.epsilon) {
      return this.getTrueSolarLongitude(centreX);
    } else {
      const centreY = this.getEclipticLongitude(centreX);
      const relation = Celestial.threeRelation(leftY, centreY, rightY);
      if (relation < 0) {
        rightX += width;
        rightY = this.getEclipticLongitude(rightX);
        return this.findConjunction(centreX, centreY, rightX, rightY);
      } else if (relation > 0) {
        leftX -= width;
        leftY = this.getEclipticLongitude(leftX);
        return this.findConjunction(leftX, leftY, centreX, centreY);
      } else {
        leftX += width / 2;
        leftY = this.getEclipticLongitude(leftX);
        rightX -= width / 2;
        rightY = this.getEclipticLongitude(rightX);
        return this.findConjunction(leftX, leftY, rightX, rightY);
      }
    }
  }

  getConjunction(ahargana: number): number {
    const leftX = ahargana - 2;
    const leftY = this.getEclipticLongitude(leftX);
    const rightX = ahargana + 2;
    const rightY = this.getEclipticLongitude(rightX);
    return this.findConjunction(leftX, leftY, rightX, rightY);
  }

  getLastConjunctionLongitude(ahargana: number, tithi: number): number {
    const newNew = this.yuga.CivilDays / (this.planets.moon.YugaRotation - this.planets.sun.YugaRotation);
    ahargana -= tithi * (newNew / 30);

    if (Math.abs(ahargana - this.backLastConjunctionAhargana) < 1) {
      return this.backLastConjunctionLongitude;
    } else if (Math.abs(ahargana - this.backNextConjunctionAhargana) < 1) {
      this.backLastConjunctionAhargana = this.backNextConjunctionAhargana;
      this.backLastConjunctionLongitude = this.backNextConjunctionLongitude;
      return this.backNextConjunctionLongitude;
    } else {
      this.backLastConjunctionAhargana = ahargana;
      this.backLastConjunctionLongitude = this.getConjunction(ahargana);
      return this.backLastConjunctionLongitude;
    }
  }

  getNextConjunctionLongitude(ahargana: number, tithi: number): number {
    const newNew = this.yuga.CivilDays / (this.planets.moon.YugaRotation - this.planets.sun.YugaRotation);
    ahargana += (30 - tithi) * (newNew / 30);

    if (Math.abs(ahargana - this.backNextConjunctionAhargana) < 1) {
      return this.backNextConjunctionLongitude;
    } else {
      this.backNextConjunctionAhargana = ahargana;
      this.backNextConjunctionLongitude = this.getConjunction(ahargana);
      return this.backNextConjunctionLongitude;
    }
  }

}
