/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

import math from './../math';
import PlanetarySystem from './planetarySystem';

class Celestial {
  constructor(settings) {
    this.planetarySystem = new PlanetarySystem(settings.system);
    this.backLastConjunctionAhargana = -1;
    this.backNextConjunctionAhargana = -1;
    this.backLastConjunctionLongitude = -1;
    this.backNextConjunctionLongitude = -1;
    this.ayanaDegree = 0;
    this.ayanaMinute = 0;
  }

  threeRelation(left, center, right) {
    if (left < center && center < right) {
      return 1;
    } else if (right < center && center < left) {
      return -1;
    }
    return 0;
  }

  setAyanamsa(ahargana) {
    // TODO: Add Tests if/when feasible
    // Good reads:
    // https://en.wikipedia.org/wiki/Ayanamsa
    // http://pidaparthypanchangam.com/?m=201306&paged=2
    const ayanamsa = 54 * 4320000 / this.planetarySystem.yuga.CivilDays / 3600 * ( ahargana - 1314930 );
    this.ayanaDegree = math.truncate(ayanamsa);
    this.ayanaMinute = math.truncate(60 * math.fractional(ayanamsa));
  }

  getMeanLongitude(ahargana, rotation) {
    // https://en.wikipedia.org/wiki/Mean_longitude
    // https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#Spherical_coordinates
    return 360 * math.fractional(rotation * ahargana / this.planetarySystem.yuga.CivilDays);
  }

  getTrueLongitude(ahargana, meanSolarLongitude, planet) {
    let argument;
    let anomaly1;

    // first sighra correction
    if (planet === 'mercury' || planet === 'venus') {
      anomaly1 = this.getMeanLongitude(ahargana, this.planetarySystem[planet].Sighra) - meanSolarLongitude;
    } else {
      anomaly1 = this.getMeanLongitude(ahargana, this.planetarySystem[planet].Sighra) - this.planetarySystem[planet].MeanPosition;
    }
    const equation1 = this.getSighraEquation(anomaly1, planet);

    // first manda correction
    const meanLong1 = this.planetarySystem[planet].MeanPosition + equation1 / 2;
    argument = meanLong1 - this.planetarySystem[planet].Apogee;
    const equation2 = this.getMandaEquation(argument, planet);

    // second manda correction
    const meanLong2 = meanLong1 - equation2 / 2;
    argument = meanLong2 - this.planetarySystem[planet].Apogee;
    const equation3 = this.getMandaEquation(argument, planet);

    // second sighra correction
    const meanLong3 = this.planetarySystem[planet].MeanPosition - equation3;
    const anomaly2 = this.getMeanLongitude(ahargana, this.planetarySystem[planet].Sighra) - meanLong3;
    const equation4 = this.getSighraEquation(anomaly2, planet);

    const equation5 = 0;

    // {$ifdef suryasiddhanta}
    // {$else}
    //    if (planet === 'mercury' || planet === 'venus') {
    //        argument = meanSolarLongitude - (77 + 17 / 60);
    //        equation5 = (13.5 / 360 * Math.sin(argument / math.radianInDegrees)) * math.radianInDegrees;
    //    }
    //    if (planet === 'venus') {
    //        equation5 = equation5 - (1 + 7 / 60);
    //    }
    // {$endif}

    return math.zero360(meanLong3 + equation4 + equation5);
  }

  declination(longitude) {
    // https://en.wikipedia.org/wiki/Declination
    return Math.asin(Math.sin(longitude / math.radianInDegrees) * Math.sin(24 / math.radianInDegrees)) *
      math.radianInDegrees;
  }

  getDaylightEquation(year, latitude, ahargana) {
    // TODO: Add Tests if/when feasible
    // Good read - http://en.wikipedia.org/wiki/Equation_of_time#Calculating_the_equation_of_time
    const meanSolarLongitude = this.getMeanLongitude(ahargana, this.planetarySystem.sun.YugaRotation);

    // Sayana Solar Longitude and Declination
    const sayanaMeanSolarLongitude = meanSolarLongitude + 54 / 3600 * (year - 499);
    const sayanaDeclination = this.declination(sayanaMeanSolarLongitude); // See Sewell, p.10

    // Equation of day light by Analemma (https://en.wikipedia.org/wiki/Analemma)
    const x = Math.tan(latitude / math.radianInDegrees) * Math.tan(sayanaDeclination / math.radianInDegrees);

    return 0.5 * Math.asin(x) / Math.PI;
  }

  getSunriseTime(equationOfTime) {
    // TODO: Add Tests if/when feasible
    const sunriseTime = (0.25 - equationOfTime) * 24;
    const hour = math.truncate(sunriseTime);
    const minute = math.truncate(60 * math.fractional(sunriseTime));
    return {
      hour   : hour,
      minute : minute
    };
  }

  getMandaEquation(argument, planet) {
    return Math.asin(this.planetarySystem[planet].MandaCircumference / 360 * Math.sin(argument / math.radianInDegrees)) * math.radianInDegrees;
  }

  getSighraEquation(anomaly, planet) {
    const bhuja = this.planetarySystem[planet].SighraCircumference / 360 * Math.sin(anomaly / math.radianInDegrees) * math.radianInDegrees;
    const koti = this.planetarySystem[planet].SighraCircumference / 360 * Math.cos(anomaly / math.radianInDegrees) * math.radianInDegrees;
    const karna = Math.sqrt(math.square(math.radianInDegrees + koti) + math.square(bhuja));

    return Math.asin(bhuja / karna) * math.radianInDegrees;
  }

  getTithi(trueLunarLongitude, trueSolarLongitude) {
    let eclipticLongitude = trueLunarLongitude - trueSolarLongitude;
    eclipticLongitude = math.zero360(eclipticLongitude);

    return eclipticLongitude / 12;
  }

  getTrueLunarLongitude(ahargana) {
    const meanLunarLongitude = this.getMeanLongitude(ahargana, this.planetarySystem.moon.YugaRotation);
    const apogee = this.getMeanLongitude(ahargana, this.planetarySystem.candrocca.YugaRotation) + 90;
    return math.zero360(meanLunarLongitude - this.getMandaEquation(meanLunarLongitude - apogee, 'moon'));
  }

  getTrueSolarLongitude(ahargana) {
    const meanSolarLongitude = this.getMeanLongitude(ahargana, this.planetarySystem.sun.YugaRotation);
    return math.zero360(meanSolarLongitude - this.getMandaEquation(meanSolarLongitude - this.planetarySystem.sun.Apogee, 'sun'));
  }

  getElong(ahargana) {
    let eclipticLongitude = Math.abs(this.getTrueLunarLongitude(ahargana) - this.getTrueSolarLongitude(ahargana));
    if (eclipticLongitude >= 180) {
      eclipticLongitude = 360 - eclipticLongitude;
    }
    return eclipticLongitude;
  }

  findConjunction(leftX, leftY, rightX, rightY) {
    const width = (rightX - leftX) / 2;
    const centreX = (rightX + leftX) / 2;
    if (width < math.epsilon) {
      return this.getTrueSolarLongitude(centreX);
    } else {
      const centreY = this.getElong(centreX);
      const relation = this.threeRelation(leftY, centreY, rightY);
      if (relation < 0) {
        rightX += width;
        rightY = this.getElong(rightX);
        return this.findConjunction(centreX, centreY, rightX, rightY);
      } else if (relation >= 0) {
        leftX -= width;
        leftY = this.getElong(leftX);
        return this.findConjunction(leftX, leftY, centreX, centreY);
      } else {
        leftX += width / 2;
        leftY = this.getElong(leftX);
        rightX -= width / 2;
        rightY = this.getElong(rightX);
        return this.findConjunction(leftX, leftY, rightX, rightY);
      }
    }
  }

  getConjunction(ahargana) {
    return this.findConjunction(ahargana - 2, this.getElong(ahargana - 2), ahargana + 2, this.getElong(ahargana + 2));
  }

  getLastConjunctionLongitude(ahargana, tithi) {
    const newNew = this.planetarySystem.yuga.CivilDays / (this.planetarySystem.moon.YugaRotation - this.planetarySystem.sun.YugaRotation);
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
    const newNew = this.planetarySystem.yuga.CivilDays / (this.planetarySystem.moon.YugaRotation - this.planetarySystem.sun.YugaRotation);
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
