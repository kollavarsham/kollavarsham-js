/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

import Celestial from './celestial/index.js';
import Calendar from './calendar.js';
import JulianDate from './dates/julianDate.js';
import KollavarshamDate from './dates/kollavarshamDate.js';
import SakaDate from './dates/sakaDate.js';
import locations from './locations.js';
import MathHelper from './mathHelper.js';

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
  constructor(settings = {}) {
    // TODO: No need to keep passing down the settings to all the classes. FIX IT
    this.celestial = new Celestial(settings);
    this.calendar = new Calendar(settings);
  }

  get planets() {
    return this.celestial.planets;
  }

  getPaksa(tithi) {
    return tithi >= 15 ? 'Krsnapaksa' : 'Suklapaksa';
  }

  fromGregorianToSaka(settings, gregorianDate) {
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

    const paksa = calendarData.paksa = this.getPaksa(calendarData.tithiDay);
    const tithiDay = calendarData.tithiDay = calendarData.tithiDay >= 15 ? calendarData.tithiDay -= 15 : calendarData.tithiDay;

    // last conjunction
    const lastConjunctionLongitude = this.celestial.getLastConjunctionLongitude(ahargana, tithi);

    // next conjunction
    const nextConjunctionLongitude = this.celestial.getNextConjunctionLongitude(ahargana, tithi);

    calendarData.adhimasa = Calendar.getAdhimasa(lastConjunctionLongitude, nextConjunctionLongitude);
    const masaNum = calendarData.masaNum = Calendar.getMasaNum(trueSolarLongitude, lastConjunctionLongitude);
    // TODO: Move below to within SakaDate class
    calendarData.masa = Calendar.getMasaName(calendarData.masaNum).saka;

    const naksatra = Calendar.getNaksatra(trueLunarLongitude);
    calendarData.naksatra = naksatra.saka;
    calendarData.malayalaNaksatra = naksatra.enMalayalam;
    calendarData.mlMalayalaNaksatra = naksatra.mlMalayalam;

    // kali and Saka era
    calendarData.YearKali = this.calendar.aharganaToKali(ahargana + ( 4 - calendarData.masaNum ) * 30);
    const sakaYear = calendarData.YearSaka = Calendar.kaliToSaka(calendarData.YearKali);
    calendarData.YearVikrama = calendarData.YearSaka + 135;

    // The below was a separate method named calculations.planetary (ported from planetary_calculations in perl)
    const planetNames = ['mercury', 'venus', 'mars', 'jupiter', 'saturn'];
    for (let i = 0; i < planetNames.length; i++) {
      this.planets[planetNames[i]].MeanPosition = this.celestial.getMeanLongitude(ahargana, this.planets[planetNames[i]].Rotation);
      this.planets[planetNames[i]].TruePosition = this.celestial.getTrueLongitude(ahargana, meanSolarLongitude, planetNames[i]);
    }

    const {sauraMasa, sauraDivasa} = this.calendar.getSauraMasaAndSauraDivasa(ahargana, desantara);

    const sakaDate = new SakaDate(sakaYear, masaNum, tithiDay, paksa);
    sakaDate.gregorianDate = gregorianDate;
    sakaDate.julianDay = julianDay;
    sakaDate.ahargana = aharganaRounded;
    sakaDate.sauraMasa = sauraMasa;
    sakaDate.sauraDivasa = sauraDivasa;
    sakaDate.calendarData = calendarData;
    return sakaDate;
  }

  fromGregorian(settings, gregorianDate) {
    const sakaDate = this.fromGregorianToSaka(settings, gregorianDate);

    const malayalaMasaNum = calendarData.malayalaMasaNum = (sakaDate.sauraMasa - 4 + 12 ) % 12;

    // Sewell p.45 - https://archive.org/stream/indiancalendarwi00sewerich#page/45/mode/1up
    const malayalamYear = sakaDate.year - 747 +
      MathHelper.truncate((sakaDate.month - malayalaMasaNum + 12) / 12);

    // TODO: Move below to within KollavarshamDate class (Confusing usage of sauraMasa for both number and name)
    calendarData.sauraMasa = Calendar.getMasaName(sakaDate.sauraMasa).saura;

    // TODO: Move below to within KollavarshamDate class
    const malayalaMasa = Calendar.getMasaName(malayalaMasaNum);
    calendarData.malayalaMasa = malayalaMasa.enMalayalam;
    calendarData.mlMalayalaMasa = malayalaMasa.mlMalayalam;

    const kollavarshamDate = new KollavarshamDate(malayalamYear, malayalaMasaNum + 1, sakaDate.sauraDivasa);
    kollavarshamDate.gregorianDate = sakaDate.gregorianDate;
    kollavarshamDate.julianDay = sakaDate.julianDay;

    // TODO: Move below to within KollavarshamDate class
    const weekdayName = Calendar.julianDayToWeekday(sakaDate.julianDay);
    kollavarshamDate.weekdayName = weekdayName.en;
    kollavarshamDate.mlWeekdayName = weekdayName.ml;

    kollavarshamDate.ahargana = sakaDate.ahargana;
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

  toGregorianFromSaka(sakaDate) {
    // TODO: Remove this method??
    // This is implemented specifically for the pancanga-nodejs cli (https://github.com/kollavarsham/pancanga-nodejs)
    // Could be removed when toGregorian has been implemented based on this

    calendarData.YearSaka = sakaDate.year;
    calendarData.masaNum = sakaDate.month;
    calendarData.tithiDay = sakaDate.tithi;
    calendarData.paksa = sakaDate.paksa;

    calendarData.masa = Calendar.getMasaName(calendarData.masaNum);
    if (calendarData.paksa === 'Krsnapaksa') {
      calendarData.tithiDay += 15;
    }
    calendarData.YearKali = Calendar.sakaToKali(calendarData.YearSaka);
    const ahargana = this.calendar.kaliToAhargana(calendarData.YearKali, calendarData.masaNum, calendarData.tithiDay);
    this.getPaksa();
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
    kollavarshamDate.calendarData = calendarData;

    return kollavarshamDate;
  }

}

export default Calculations;
