/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

import MathHelper from './../mathHelper.js';
import PlanetarySystem from './planetarySystem/index.js';

class Celestial {

  constructor(settings = {}) {
    let planetarySystem = new PlanetarySystem(settings.system);
    this.planets = planetarySystem.planets;
    this.yuga = planetarySystem.yuga;
  }

  static threeRelation(left, center, right) {
    if (left < center && center < right) {
      return 1;
    } else if (right < center && center < left) {
      return -1;
    }
    return 0;
  }

  static declination(longitude) {
    // https://en.wikipedia.org/wiki/Declination
    return Math.asin(Math.sin(longitude / MathHelper.radianInDegrees) * Math.sin(24 / MathHelper.radianInDegrees)) *
      MathHelper.radianInDegrees;
  }

  static getSunriseTime(equationOfTime) {
    // TODO: Add Tests if/when feasible
    const sunriseTime = (0.25 - equationOfTime) * 24;
    const sunriseHour = MathHelper.truncate(sunriseTime);
    const sunriseMinute = MathHelper.truncate(60 * MathHelper.fractional(sunriseTime));
    return {sunriseHour, sunriseMinute};
  }

  static getTithi(trueSolarLongitude, trueLunarLongitude) {
    let eclipticLongitude = trueLunarLongitude - trueSolarLongitude;
    eclipticLongitude = MathHelper.zero360(eclipticLongitude);

    return eclipticLongitude / 12;
  }

  setPlanetaryPositions(ahargana) {
    const $planets = this.planets;

    // Lunar apogee and node at sunrise
    $planets.candrocca.MeanPosition = MathHelper.zero360(this.getMeanLongitude(ahargana, $planets.candrocca.YugaRotation) + 90);
    $planets.rahu.MeanPosition = MathHelper.zero360(this.getMeanLongitude(ahargana, $planets.rahu.YugaRotation) + 180);

    // mean and true sun at sunrise
    const meanSolarLongitude = this.getMeanLongitude(ahargana, $planets.sun.YugaRotation);
    $planets.sun.MeanPosition = meanSolarLongitude;

    const trueSolarLongitude = MathHelper.zero360(meanSolarLongitude - this.getMandaEquation(meanSolarLongitude - $planets.sun.Apogee, 'sun'));
    $planets.sun.TruePosition = trueSolarLongitude;

    // mean and true moon at sunrise
    const meanLunarLongitude = this.getMeanLongitude(ahargana, $planets.moon.YugaRotation);
    $planets.moon.MeanPosition = meanLunarLongitude;

    $planets.moon.Apogee = $planets.candrocca.MeanPosition;

    const trueLunarLongitude = MathHelper.zero360(meanLunarLongitude - this.getMandaEquation(meanLunarLongitude - $planets.moon.Apogee, 'moon'));
    $planets.moon.TruePosition = trueLunarLongitude;

    // The below was a separate method named calculations.planetary (ported from planetary_calculations in perl)
    const planetNames = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
    for (let i = 0; i < planetNames.length; i++) {
      $planets[planetNames[i]].MeanPosition = this.getMeanLongitude(ahargana, $planets[planetNames[i]].Rotation);
      $planets[planetNames[i]].TruePosition = this.getTrueLongitude(ahargana, meanSolarLongitude, planetNames[i]);
    }
    return {trueSolarLongitude, trueLunarLongitude};
  }

  setAyanamsa(ahargana) {
    // TODO: Add Tests if/when feasible
    // Good reads:
    // https://en.wikipedia.org/wiki/Ayanamsa
    // http://pidaparthypanchangam.com/?m=201306&paged=2
    const ayanamsa = 54 * 4320000 / this.yuga.CivilDays / 3600 * ( ahargana - 1314930 );
    this.ayanaDegree = MathHelper.truncate(ayanamsa);
    this.ayanaMinute = MathHelper.truncate(60 * MathHelper.fractional(ayanamsa));
  }

  getMeanLongitude(ahargana, rotation) {
    // https://en.wikipedia.org/wiki/Mean_longitude
    // https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Spherical_coordinates
    return 360 * MathHelper.fractional(rotation * ahargana / this.yuga.CivilDays);
  }

  getTrueLongitude(ahargana, meanSolarLongitude, planet) {
    let argument;
    let anomaly1;

    // first sighra correction
    if (planet === 'mercury' || planet === 'venus') {
      anomaly1 = this.getMeanLongitude(ahargana, this.planets[planet].Sighra) - meanSolarLongitude;
    } else {
      anomaly1 = this.getMeanLongitude(ahargana, this.planets[planet].Sighra) - this.planets[planet].MeanPosition;
    }
    const equation1 = this.getSighraEquation(anomaly1, planet);

    // first manda correction
    const meanLong1 = this.planets[planet].MeanPosition + equation1 / 2;
    argument = meanLong1 - this.planets[planet].Apogee;
    const equation2 = this.getMandaEquation(argument, planet);

    // second manda correction
    const meanLong2 = meanLong1 - equation2 / 2;
    argument = meanLong2 - this.planets[planet].Apogee;
    const equation3 = this.getMandaEquation(argument, planet);

    // second sighra correction
    const meanLong3 = this.planets[planet].MeanPosition - equation3;
    const anomaly2 = this.getMeanLongitude(ahargana, this.planets[planet].Sighra) - meanLong3;
    const equation4 = this.getSighraEquation(anomaly2, planet);

    const equation5 = 0;

    // {$ifdef suryasiddhanta}
    // {$else}
    //    if (planet === 'mercury' || planet === 'venus') {
    //        argument = meanSolarLongitude - (77 + 17 / 60);
    //        equation5 = (13.5 / 360 * Math.sin(argument / MathHelper.radianInDegrees)) * MathHelper.radianInDegrees;
    //    }
    //    if (planet === 'venus') {
    //        equation5 = equation5 - (1 + 7 / 60);
    //    }
    // {$endif}

    return MathHelper.zero360(meanLong3 + equation4 + equation5);
  }

  getDaylightEquation(year, latitude, ahargana) {
    // TODO: Add Tests if/when feasible
    // Good read - http://en.wikipedia.org/wiki/Equation_of_time#Calculating_the_equation_of_time
    const meanSolarLongitude = this.getMeanLongitude(ahargana, this.planets.sun.YugaRotation);

    // Sayana Solar Longitude and Declination
    const sayanaMeanSolarLongitude = meanSolarLongitude + 54 / 3600 * (year - 499);
    const sayanaDeclination = Celestial.declination(sayanaMeanSolarLongitude); // See Sewell, p.10

    // Equation of day light by Analemma (https://en.wikipedia.org/wiki/Analemma)
    const x = Math.tan(latitude / MathHelper.radianInDegrees) * Math.tan(sayanaDeclination / MathHelper.radianInDegrees);

    return 0.5 * Math.asin(x) / Math.PI;
  }

  getMandaEquation(argument, planet) {
    return Math.asin(this.planets[planet].MandaCircumference / 360 * Math.sin(argument / MathHelper.radianInDegrees)) * MathHelper.radianInDegrees;
  }

  getSighraEquation(anomaly, planet) {
    const bhuja = this.planets[planet].SighraCircumference / 360 * Math.sin(anomaly / MathHelper.radianInDegrees) * MathHelper.radianInDegrees;
    const koti = this.planets[planet].SighraCircumference / 360 * Math.cos(anomaly / MathHelper.radianInDegrees) * MathHelper.radianInDegrees;
    const karna = Math.sqrt(MathHelper.square(MathHelper.radianInDegrees + koti) + MathHelper.square(bhuja));

    return Math.asin(bhuja / karna) * MathHelper.radianInDegrees;
  }

  getTrueLunarLongitude(ahargana) {
    const meanLunarLongitude = this.getMeanLongitude(ahargana, this.planets.moon.YugaRotation);
    const apogee = this.getMeanLongitude(ahargana, this.planets.candrocca.YugaRotation) + 90;
    return MathHelper.zero360(meanLunarLongitude - this.getMandaEquation(meanLunarLongitude - apogee, 'moon'));
  }

  getTrueSolarLongitude(ahargana) {
    const meanSolarLongitude = this.getMeanLongitude(ahargana, this.planets.sun.YugaRotation);
    return MathHelper.zero360(meanSolarLongitude - this.getMandaEquation(meanSolarLongitude - this.planets.sun.Apogee, 'sun'));
  }

  getEclipticLongitude(ahargana) {
    let eclipticLongitude = Math.abs(this.getTrueLunarLongitude(ahargana) - this.getTrueSolarLongitude(ahargana));
    if (eclipticLongitude >= 180) {
      eclipticLongitude = 360 - eclipticLongitude;
    }
    return eclipticLongitude;
  }

  findConjunction(leftX, leftY, rightX, rightY) {
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

  getConjunction(ahargana) {
    const leftX = ahargana - 2;
    const leftY = this.getEclipticLongitude(leftX);
    const rightX = ahargana + 2;
    const rightY = this.getEclipticLongitude(rightX);
    return this.findConjunction(leftX, leftY, rightX, rightY);
  }

  getLastConjunctionLongitude(ahargana, tithi) {
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

  getNextConjunctionLongitude(ahargana, tithi) {
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

export default Celestial;
