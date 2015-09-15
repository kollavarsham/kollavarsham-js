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
import MathHelper from './mathHelper';

let calendarData = {
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

class Calculations {
  constructor(settings) {
    this.celestial = new Celestial(settings);
    this.calendar = new Calendar(settings);
  }

  get planets() {
    return this.celestial.planets;
  }

  setPaksa() {
    // TODO: Add Tests if/when feasible
    if (calendarData.tithiDay >= 15) {
      calendarData.tithiDay -= 15;
      calendarData.paksa = 'Krsnapaksa';
    } else {
      calendarData.paksa = 'Suklapaksa';
    }
  }

  fromGregorian(settings, gregorianDate) {
    // TODO: Add Tests if/when feasible
    let julianDay = Calendar.gregorianDateToJulianDay(gregorianDate);
    let ahargana = Calendar.julianDayToAhargana(julianDay);
    julianDay = MathHelper.truncate(julianDay + 0.5);
    const aharganaRounded = MathHelper.truncate(ahargana + 0.5);

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
    calendarData.sunriseTime = Celestial.getSunriseTime(equationOfTime);

    // Lunar apogee and node at sunrise
    this.planets.candrocca.MeanPosition = this.celestial.getMeanLongitude(ahargana, this.planets.candrocca.YugaRotation) + 90;
    this.planets.candrocca.MeanPosition = MathHelper.zero360(this.planets.candrocca.MeanPosition);

    this.planets.rahu.MeanPosition = this.celestial.getMeanLongitude(ahargana, this.planets.rahu.YugaRotation) + 180;
    this.planets.rahu.MeanPosition = MathHelper.zero360(this.planets.rahu.MeanPosition);

    // mean and true sun at sunrise
    const meanSolarLongitude = this.celestial.getMeanLongitude(ahargana, this.planets.sun.YugaRotation);
    this.planets.sun.MeanPosition = meanSolarLongitude;
    const trueSolarLongitude = MathHelper.zero360(meanSolarLongitude -
      this.celestial.getMandaEquation(meanSolarLongitude - this.planets.sun.Apogee, 'sun'));
    this.planets.sun.TruePosition = trueSolarLongitude;

    // mean and true moon at sunrise
    const meanLunarLongitude = this.celestial.getMeanLongitude(ahargana, this.planets.moon.YugaRotation);
    this.planets.moon.MeanPosition = meanLunarLongitude;
    this.planets.moon.Apogee = this.planets.candrocca.MeanPosition;
    const trueLunarLongitude = MathHelper.zero360(meanLunarLongitude -
      this.celestial.getMandaEquation(meanLunarLongitude - this.planets.moon.Apogee, 'moon'));
    this.planets.moon.TruePosition = trueLunarLongitude;

    // finding tithi and longitude of conjunction
    const tithi = Celestial.getTithi(trueLunarLongitude, trueSolarLongitude);
    calendarData.tithiDay = MathHelper.truncate(tithi) + 1;
    calendarData.ftithi = MathHelper.fractional(tithi);

    this.setPaksa();

    // last conjunction
    const lastConjunctionLongitude = this.celestial.getLastConjunctionLongitude(ahargana, tithi);

    // next conjunction
    const nextConjunctionLongitude = this.celestial.getNextConjunctionLongitude(ahargana, tithi);

    calendarData.adhimasa = Calendar.getAdhimasa(lastConjunctionLongitude, nextConjunctionLongitude);
    calendarData.masaNum = Calendar.getMasaNum(trueSolarLongitude, lastConjunctionLongitude);
    // TODO: Move the below function to within KollavarshamDate class
    calendarData.masa = Calendar.getMasaName(calendarData.masaNum).saka;

    const sauraMasaMonthDay = this.calendar.getSauraMasaMonthDay(ahargana, desantara);
    const sauraMasaNum = sauraMasaMonthDay.month;
    const sauraMasaDay = sauraMasaMonthDay.day;
    // TODO: Move the below function to within KollavarshamDate class
    calendarData.sauraMasa = Calendar.getMasaName(sauraMasaNum).saura;

    calendarData.malayalaMasaNum = (sauraMasaNum - 4 + 12 ) % 12;
    // TODO: Move the below function to within KollavarshamDate class
    const malayalaMasa = Calendar.getMasaName(calendarData.malayalaMasaNum);
    calendarData.malayalaMasa = malayalaMasa.enMalayalam;
    calendarData.mlMalayalaMasa = malayalaMasa.mlMalayalam;

    const naksatra = Calendar.getNaksatra(trueLunarLongitude);
    calendarData.naksatra = naksatra.saka;
    calendarData.malayalaNaksatra = naksatra.enMalayalam;
    calendarData.mlMalayalaNaksatra = naksatra.mlMalayalam;

    // kali and Saka era
    calendarData.YearKali = this.calendar.aharganaToKali(ahargana + ( 4 - calendarData.masaNum ) * 30);
    calendarData.YearSaka = Calendar.kaliToSaka(calendarData.YearKali);
    calendarData.YearVikrama = calendarData.YearSaka + 135;
    // Sewell p.45 - https://archive.org/stream/indiancalendarwi00sewerich#page/45/mode/1up
    const malayalamYear = calendarData.YearSaka - 747 +
      MathHelper.truncate((calendarData.masaNum - calendarData.malayalaMasaNum + 12) / 12);

    // The below was a separate method named calculations.planetary (ported from planetary_calculations in perl)
    const planetNames = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
    for (let i = 0; i < planetNames.length; i++) {
      this.planets[planetNames[i]].MeanPosition = this.celestial.getMeanLongitude(ahargana, this.planets[planetNames[i]].Rotation);
      this.planets[planetNames[i]].TruePosition = this.celestial.getTrueLongitude(ahargana, meanSolarLongitude, planetNames[i]);
    }

    const kollavarshamDate = new KollavarshamDate(malayalamYear, sauraMasaNum, sauraMasaDay);
    kollavarshamDate.gregorianDate = gregorianDate;
    kollavarshamDate.julianDay = julianDay;
    const weekdayName = Calendar.julianDayToWeekday(julianDay);
    kollavarshamDate.weekdayName = weekdayName.en;
    kollavarshamDate.mlWeekdayName = weekdayName.ml;
    kollavarshamDate.ahargana = aharganaRounded;
    kollavarshamDate.calendarData = calendarData;

    return kollavarshamDate;
  }

  toGregorian(settings) {
    // TODO: Implement this to convert a Kollavarsham date to Gregorian after figuring out the samkranti discrepancies
    // between Saka year and Malayalam year

    /* This is how it works in Perl - Set these below variables before calling this   */
    /*     calendarData.YearSaka, calendarData.masaNum, globals.paksa, globals.tithiDay )       */
    /* We are not doing this as we aren't trying to convert Saka or Vikrama year date */
    console.log('Settings: ' + JSON.stringify(settings)); // eslint-disable-line no-console
    throw new Error('Not implemented');
  }

  toGregorianFromSaka(settings, hinduDate) {
    // TODO: Add Tests if/when feasible

    // This is implemented specifically for the pancanga-nodejs cli (https://github.com/kollavarsham/pancanga-nodejs)
    // Could be removed when toGregorian has been implemented based on this

    calendarData.YearSaka = hinduDate.yearSaka;
    calendarData.masaNum = hinduDate.masaNum;
    calendarData.paksa = hinduDate.paksa;
    calendarData.tithiDay = hinduDate.tithiDay;

    calendarData.masa = Calendar.getMasaName(calendarData.masaNum);
    if (calendarData.paksa === 'Krsnapaksa') {
      calendarData.tithiDay += 15;
    }
    calendarData.YearKali = Calendar.sakaToKali(calendarData.YearSaka);
    const ahargana = this.calendar.kaliToAhargana(calendarData.YearKali, calendarData.masaNum, calendarData.tithiDay);
    this.setPaksa();
    let julianDay = Calendar.aharganaToJulianDay(ahargana);
    julianDay += 0.5;

    const modernDate = Calendar.julianDayToModernDate(julianDay);
    if (JulianDate.prototype.isPrototypeOf(modernDate)) {
      console.log('kollavarsham::toGregorianDate: *** Returning an instance of JulianDate class ***'); // eslint-disable-line no-console
    }
    const weekdayName = Calendar.julianDayToWeekday(julianDay);

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
