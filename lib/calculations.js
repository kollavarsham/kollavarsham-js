/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

import Celestial from './celestial';
import Calendar from './calendar';
import {JulianDate, KollavarshamDate} from './date';
import locations from './locations';
import math from './math';

class Calculations {
  constructor(settings) {
    this.celestial = new Celestial(settings);
    this.calendar = new Calendar(settings);
  }

  get calendarData() {
    return {
      YearKali           : true,
      YearSaka           : true,
      YearVikrama        : true,
      masaNum            : true,
      masa               : true,
      sauraMasa          : true,
      malayalaMasa       : true, // HP
      mlMalayalaMasa     : true, // HP
      malayalaMasaNum    : true, // HP
      adhimasa           : true,
      paksa              : true,
      tithiDay           : true,
      ftithi             : true,
      naksatra           : true,
      malayalaNaksatra   : true, // HP
      mlMalayalaNaksatra : true, // HP
      sunriseTime        : {
        hour   : true,
        minute : true
      }
    };
  }

  get planets() {
    return this.celestial.planetarySystem.planets;
  }

  setPaksa() {
    // TODO: Add Tests if/when feasible
    if (this.calendarData.tithiDay >= 15) {
      this.calendarData.tithiDay -= 15;
      this.calendarData.paksa = 'Krsnapaksa';
    } else {
      this.calendarData.paksa = 'Suklapaksa';
    }
  }

  fromGregorian(settings, gregorianDate) {
    // TODO: Add Tests if/when feasible
    let julianDay = this.calendar.gregorianDateToJulianDay(gregorianDate);
    let ahargana = this.calendar.julianDayToAhargana(julianDay);
    julianDay = math.truncate(julianDay + 0.5);
    const aharganaRounded = math.truncate(ahargana + 0.5);

    // Definition of desantara
    //      http://books.google.com/books?id=kt9DIY1g9HYC&pg=PA683&lpg=PA683&dq=desantara&source=bl&ots=NLd1wFKFfN&sig=jCfG95R-6eiSff3L73DCodijo1I&hl=en&sa=X&ei=uKgHU__uKOr7yAGm0YGoBQ&ved=0CF8Q6AEwCDgK#v=onepage&q=desantara&f=false
    const desantara = (settings.longitude - locations.Ujjain.longitude) / 360;

    this.celestial.setAyanamsa(ahargana);

    // at 6 o'clock
    ahargana += 0.25;

    // desantara
    ahargana -= desantara;

    // time of sunrise at local latitude
    const equationOfTime = this.celestial.getDaylightEquation(gregorianDate.getFullYear(), settings.latitude, ahargana);
    ahargana -= equationOfTime;
    this.calendarData.sunriseTime = this.celestial.getSunriseTime(equationOfTime);

    // Lunar apogee and node at sunrise
    this.planets.candrocca.MeanPosition = this.celestial.getMeanLongitude(ahargana, this.planets.candrocca.YugaRotation) + 90;
    this.planets.candrocca.MeanPosition = math.zero360(this.planets.candrocca.MeanPosition);

    this.planets.rahu.MeanPosition = this.celestial.getMeanLongitude(ahargana, this.planets.rahu.YugaRotation) + 180;
    this.planets.rahu.MeanPosition = math.zero360(this.planets.rahu.MeanPosition);

    // mean and true sun at sunrise
    const meanSolarLongitude = this.celestial.getMeanLongitude(ahargana, this.planets.sun.YugaRotation);
    this.planets.sun.MeanPosition = meanSolarLongitude;
    const trueSolarLongitude = math.zero360(meanSolarLongitude -
      this.celestial.getMandaEquation(meanSolarLongitude - this.planets.sun.Apogee, 'sun'));
    this.planets.sun.TruePosition = trueSolarLongitude;

    // mean and true moon at sunrise
    const meanLunarLongitude = this.celestial.getMeanLongitude(ahargana, this.planets.moon.YugaRotation);
    this.planets.moon.MeanPosition = meanLunarLongitude;
    this.planets.moon.Apogee = this.planets.candrocca.MeanPosition;
    const trueLunarLongitude = math.zero360(meanLunarLongitude -
      this.celestial.getMandaEquation(meanLunarLongitude - this.planets.moon.Apogee, 'moon'));
    this.planets.moon.TruePosition = trueLunarLongitude;

    // finding tithi and longitude of conjunction
    const tithi = this.celestial.getTithi(trueLunarLongitude, trueSolarLongitude);
    this.calendarData.tithiDay = math.truncate(tithi) + 1;
    this.calendarData.ftithi = math.fractional(tithi);

    this.setPaksa();

    // last conjunction
    const lastConjunctionLongitude = this.celestial.getLastConjunctionLongitude(ahargana, tithi);

    // next conjunction
    const nextConjunctionLongitude = this.celestial.getNextConjunctionLongitude(ahargana, tithi);

    this.calendarData.adhimasa = this.calendar.getAdhimasa(lastConjunctionLongitude, nextConjunctionLongitude);
    this.calendarData.masaNum = this.calendar.getMasaNum(trueSolarLongitude, lastConjunctionLongitude);
    // TODO: Move the below function to within KollavarshamDate class
    this.calendarData.masa = this.calendar.getMasaName(this.calendarData.masaNum).saka;

    const sauraMasaMonthDay = this.calendar.getSauraMasaMonthDay(ahargana, desantara);
    const sauraMasaNum = sauraMasaMonthDay.month;
    const sauraMasaDay = sauraMasaMonthDay.day;
    // TODO: Move the below function to within KollavarshamDate class
    this.calendarData.sauraMasa = this.calendar.getMasaName(sauraMasaNum).saura;

    this.calendarData.malayalaMasaNum = (sauraMasaNum - 4 + 12 ) % 12;
    // TODO: Move the below function to within KollavarshamDate class
    const malayalaMasa = this.calendar.getMasaName(this.calendarData.malayalaMasaNum);
    this.calendarData.malayalaMasa = malayalaMasa.enMalayalam;
    this.calendarData.mlMalayalaMasa = malayalaMasa.mlMalayalam;

    const naksatra = this.calendar.getNaksatra(trueLunarLongitude);
    this.calendarData.naksatra = naksatra.saka;
    this.calendarData.malayalaNaksatra = naksatra.enMalayalam;
    this.calendarData.mlMalayalaNaksatra = naksatra.mlMalayalam;

    // kali and Saka era
    this.calendarData.YearKali = this.calendar.aharganaToKali(ahargana + ( 4 - this.calendarData.masaNum ) * 30);
    this.calendarData.YearSaka = this.calendar.kaliToSaka(this.calendarData.YearKali);
    this.calendarData.YearVikrama = this.calendarData.YearSaka + 135;
    // Sewell p.45 - https://archive.org/stream/indiancalendarwi00sewerich#page/45/mode/1up
    const malayalamYear = this.calendarData.YearSaka - 747 +
      math.truncate((this.calendarData.masaNum - this.calendarData.malayalaMasaNum + 12) / 12);

    // The below was a separate method named calculations.planetary (ported from planetary_calculations in perl)
    const planets = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
    for (let i = 0; i < planets.length; i++) {
      planets[planets[i]].MeanPosition = this.celestial.getMeanLongitude(ahargana, planets[planets[i]].Rotation);
      planets[planets[i]].TruePosition = this.celestial.getTrueLongitude(ahargana, meanSolarLongitude, planets[i]);
    }

    const kollavarshamDate = new KollavarshamDate(malayalamYear, sauraMasaNum, sauraMasaDay);
    kollavarshamDate.gregorianDate = gregorianDate;
    kollavarshamDate.julianDay = julianDay;
    const weekdayName = this.calendar.julianDayToWeekday(julianDay);
    kollavarshamDate.weekdayName = weekdayName.en;
    kollavarshamDate.mlWeekdayName = weekdayName.ml;
    kollavarshamDate.ahargana = aharganaRounded;
    kollavarshamDate.calendarData = this.calendarData;

    return kollavarshamDate;
  }

  toGregorian(settings) {
    // TODO: Implement this to convert a Kollavarsham date to Gregorian after figuring out the samkranti discrepancies
    // between Saka year and Malayalam year

    /* This is how it works in Perl - Set these below variables before calling this   */
    /*     this.calendarData.YearSaka, this.calendarData.masaNum, globals.paksa, globals.tithiDay )       */
    /* We are not doing this as we aren't trying to convert Saka or Vikrama year date */
    /*eslint-disable */
    console.log('Settings: ' + JSON.stringify(settings));
    /*eslint-enable */
    throw new Error('Not implemented');
  }

  toGregorianFromSaka(settings, hinduDate) {
    // TODO: Add Tests if/when feasible

    // This is implemented specifically for the pancanga-nodejs cli (https://github.com/kollavarsham/pancanga-nodejs)
    // Could be removed when toGregorian has been implemented based on this

    this.calendarData.YearSaka = hinduDate.yearSaka;
    this.calendarData.masaNum = hinduDate.masaNum;
    this.calendarData.paksa = hinduDate.paksa;
    this.calendarData.tithiDay = hinduDate.tithiDay;

    this.calendarData.masa = this.calendar.getMasaName(this.calendarData.masaNum);
    if (this.calendarData.paksa === 'Krsnapaksa') {
      this.calendarData.tithiDay += 15;
    }
    this.calendarData.YearKali = this.calendar.sakaToKali(this.calendarData.YearSaka);
    const ahargana = this.calendar.kaliToAhargana(this.calendarData.YearKali, this.calendarData.masaNum, this.calendarData.tithiDay);
    this.setPaksa();
    let julianDay = this.calendar.aharganaToJulianDay(ahargana);
    julianDay += 0.5;

    const modernDate = this.calendar.julianDayToModernDate(julianDay);
    if (JulianDate.prototype.isPrototypeOf(modernDate)) {
      /*eslint-disable */
      console.log('kollavarsham::toGregorianDate: *** Returning an instance of JulianDate class ***');
      /*eslint-enable */
    }
    const weekdayName = this.calendar.julianDayToWeekday(julianDay);

    // TODO: Not happy that the empty constructor will make this with MalayalamYear => 1, MalayalamMonth => 1, and MalayalamDate => 1
    // TODO: Think this through before implementing toGregorian above
    const kollavarshamDate = new KollavarshamDate();
    kollavarshamDate.gregorianDate = modernDate;
    kollavarshamDate.julianDay = julianDay;
    kollavarshamDate.weekdayName = weekdayName.en;
    kollavarshamDate.ahargana = ahargana;

    return kollavarshamDate;
  }

}

export default Calculations;
