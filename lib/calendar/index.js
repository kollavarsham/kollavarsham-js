/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

import Celestial from './../celestial/index';
import math from './../math';
import {JulianDate} from './../date';

class Calendar {
  constructor(settings) {
    this.celestial = new Celestial(settings);
  }

  get weekdays() {
    return {
      0 : {en : 'Monday', ml : 'തിങ്കൾ'},
      1 : {en : 'Tuesday', ml : 'ചൊവ്വ'},
      2 : {en : 'Wednesday', ml : 'ബുധൻ'},
      3 : {en : 'Thursday', ml : 'വ്യാഴം'},
      4 : {en : 'Friday', ml : 'വെള്ളി'},
      5 : {en : 'Saturday', ml : 'ശനി'},
      6 : {en : 'Sunday', ml : 'ഞായർ'}
    };
  }

  get months() {
    return {
      January   : 0,
      February  : 1,
      March     : 2,
      April     : 3,
      May       : 4,
      June      : 5,
      July      : 6,
      August    : 7,
      September : 8,
      October   : 9,
      November  : 10,
      December  : 11
    };
  }

  get masaNames() {
    return {
      0  : {saka : 'Caitra    ', saura : 'Mesa      ', enMalayalam : 'Chingam   ', mlMalayalam : 'ചിങ്ങം'},
      1  : {saka : 'Vaisakha  ', saura : 'Vrsa      ', enMalayalam : 'Kanni     ', mlMalayalam : 'കന്നി'},
      2  : {saka : 'Jyaistha  ', saura : 'Mithuna   ', enMalayalam : 'Thulam    ', mlMalayalam : 'തുലാം'},
      3  : {saka : 'Asadha    ', saura : 'Karkata   ', enMalayalam : 'Vrischikam', mlMalayalam : 'വൃശ്ചികം'},
      4  : {saka : 'Sravana   ', saura : 'Simha     ', enMalayalam : 'Dhanu     ', mlMalayalam : 'ധനു'},
      5  : {saka : 'Bhadrapada', saura : 'Kanya     ', enMalayalam : 'Makaram   ', mlMalayalam : 'മകരം'},
      6  : {saka : 'Asvina    ', saura : 'Tula      ', enMalayalam : 'Kumbham   ', mlMalayalam : 'കുംഭം'},
      7  : {saka : 'Karttika  ', saura : 'Vrscika   ', enMalayalam : 'Meenam    ', mlMalayalam : 'മീനം'},
      8  : {saka : 'Margasirsa', saura : 'Dhanus    ', enMalayalam : 'Medam     ', mlMalayalam : 'മേടം'},
      9  : {saka : 'Pausa     ', saura : 'Makara    ', enMalayalam : 'Idavam    ', mlMalayalam : 'ഇടവം'},
      10 : {saka : 'Magha     ', saura : 'Kumbha    ', enMalayalam : 'Mithunam  ', mlMalayalam : 'മിഥുനം'},
      11 : {saka : 'Phalguna  ', saura : 'Mina      ', enMalayalam : 'Karkitakam', mlMalayalam : 'കർക്കടകം'}
    };
  }

  get naksatras() {
    return {
      0  : {saka : 'Asvini', enMalayalam : 'Ashwathi', mlMalayalam : 'അശ്വതി'},
      1  : {saka : 'Bharani', enMalayalam : 'Bharani', mlMalayalam : 'ഭരണി'},
      2  : {saka : 'Krttika', enMalayalam : 'Karthika', mlMalayalam : 'കാർത്തിക'},
      3  : {saka : 'Rohini', enMalayalam : 'Rohini', mlMalayalam : 'രോഹിണി'},
      4  : {saka : 'Mrgasira', enMalayalam : 'Makiryam', mlMalayalam : 'മകയിരം'},
      5  : {saka : 'Ardra', enMalayalam : 'Thiruvathira', mlMalayalam : 'തിരുവാതിര'},
      6  : {saka : 'Punarvasu', enMalayalam : 'Punartham', mlMalayalam : 'പുണർതം'},
      7  : {saka : 'Pusya', enMalayalam : 'Pooyam', mlMalayalam : 'പൂയം'},
      8  : {saka : 'Aslesa', enMalayalam : 'Aayilyam', mlMalayalam : 'ആയില്യം'},
      9  : {saka : 'Magha', enMalayalam : 'Makam', mlMalayalam : 'മകം'},
      10 : {saka : 'P-phalguni', enMalayalam : 'Pooram', mlMalayalam : 'പൂരം'},
      11 : {saka : 'U-phalguni', enMalayalam : 'Uthram', mlMalayalam : 'ഉത്രം'},
      12 : {saka : 'Hasta', enMalayalam : 'Atham', mlMalayalam : 'അത്തം'},
      13 : {saka : 'Citra', enMalayalam : 'Chithra', mlMalayalam : 'ചിത്ര'},
      14 : {saka : 'Svati', enMalayalam : 'Chothi', mlMalayalam : 'ചോതി'},
      15 : {saka : 'Visakha', enMalayalam : 'Vishakham', mlMalayalam : 'വിശാഖം'},
      16 : {saka : 'Anuradha', enMalayalam : 'Anizham', mlMalayalam : 'അനിഴം'},
      17 : {saka : 'Jyestha', enMalayalam : 'Thrikketta', mlMalayalam : 'തൃക്കേട്ട'},
      18 : {saka : 'Mula', enMalayalam : 'Moolam', mlMalayalam : 'മൂലം'},
      19 : {saka : 'P-asadha', enMalayalam : 'Pooradam', mlMalayalam : 'പൂരാടം'},
      20 : {saka : 'U-asadha', enMalayalam : 'Uthradam', mlMalayalam : 'ഉത്രാടം'},
      21 : {saka : 'Sravana', enMalayalam : 'Thiruvonam', mlMalayalam : 'തിരുവോണം'},
      22 : {saka : 'Dhanistha', enMalayalam : 'Avittam', mlMalayalam : 'അവിട്ടം'},
      23 : {saka : 'Satabhisaj', enMalayalam : 'Chathayam', mlMalayalam : 'ചതയം'},
      24 : {saka : 'P-bhadrapada', enMalayalam : 'Poororuttathi', mlMalayalam : 'പൂരുരുട്ടാതി'},
      25 : {saka : 'U-bhadrapada', enMalayalam : 'Uthrattathi', mlMalayalam : 'ഉത്രട്ടാതി'},
      26 : {saka : 'Revati', enMalayalam : 'Revathi', mlMalayalam : 'രേവതി'},
      27 : {saka : 'Asvini', enMalayalam : 'Ashwathi', mlMalayalam : 'അശ്വതി'}
    };
  }

  get samkranti() {
    return {
      ahargana : true,
      Year     : true,
      Month    : true,
      Day      : true,
      Hour     : true,
      Min      : true
    };
  }

  nextDate(date) {
    // TODO: This looks like a concern of the calling library - But could be exposed as a static utility function  (0 usages other than tests)
    date.setUTCDate(date.getUTCDate() + 1);
    return date;
  }

  gregorianDateToJulianDay(date) {
    //  TODO:
    // Annotate all the magic numbers below !
    // There is some explanation here - http://quasar.as.utexas.edu/BillInfo/JulianDatesG.html

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 3) {
      year -= 1;
      month += 12;
    }

    let julianDay = math.truncate(365.25 * year) + math.truncate(30.59 * (month - 2)) + day + 1721086.5;

    if (year < 0) {
      julianDay -= 1;
      if (year % 4 === 0 && month > 3) {
        julianDay += 1;
      }
    }

    if (julianDay >= 2299160) {
      julianDay += math.truncate(year / 400) - math.truncate(year / 100) + 2;
    }

    return julianDay;
  }

  julianInEngland(julianDay) {
    // TODO: This might be exposed as a static utility function (0 usages other than tests)
    // Gregorian calendar was first introduced in most of Europe in 1582,
    // but it wasn't adopted in England (and so in US and Canada) until 1752
    //
    // - http://www.timeanddate.com/calendar/julian-gregorian-switch.html
    //
    // This function returns true between
    //      October 14th, 1582 and September 14th, 1752, both dates exclusive
    return julianDay >= 2299160 && julianDay <= 2361221;
  }

  julianDayToJulianDate(julianDay) {
    const j = math.truncate(julianDay) + 1402;
    const k = math.truncate((j - 1) / 1461);
    const l = j - 1461 * k;
    const n = math.truncate((l - 1) / 365) - math.truncate(l / 1461);
    const i = l - 365 * n + 30;
    const J = math.truncate(80 * i / 2447);
    const I = math.truncate(J / 11);

    const day = i - math.truncate(2447 * J / 80);
    const month = J + 2 - 12 * I;
    const year = 4 * k + n + I - 4716;

    return new JulianDate(year, month, day);
  }

  julianDayToGregorianDate(julianDay) {
    const a = julianDay + 68569;
    const b = math.truncate(a / 36524.25);
    const c = a - math.truncate(36524.25 * b + 0.75);
    const e = math.truncate((c + 1) / 365.2425);
    const f = c - math.truncate(365.25 * e) + 31;
    const g = math.truncate(f / 30.59);
    const h = math.truncate(g / 11);

    const day = math.truncate(f - math.truncate(30.59 * g) + (julianDay - math.truncate(julianDay)));
    const month = math.truncate(g - 12 * h + 2);
    const year = math.truncate(100 * (b - 49) + e + h);

    const result = new Date(year, month - 1, day);
    if (year > 0 && year <= 99) {
      result.setFullYear(year);
    }
    return result;
  }

  julianDayToModernDate(julianDay) {
    // Will return JulianDate object for any date before 1st January 1583 AD and Date objects for later dates
    return julianDay < 2299239 ? this.julianDayToJulianDate(julianDay) : this.julianDayToGregorianDate(julianDay);
  }

  julianDayToAhargana(julianDay) {
    return julianDay - 588465.50;
  }

  aharganaToJulianDay(ahargana) {
    return 588465.50 + ahargana;
  }

  aharganaToKali(ahargana) {
    return math.truncate(ahargana * this.celestial.planetarySystem.planets.sun.YugaRotation / this.celestial.planetarySystem.yuga.CivilDays);
  }

  kaliToAhargana(yearKali, masaNum, tithiDay) {
    const sauraMasas = yearKali * 12 + masaNum; // expired saura masas

    const adhiMasas = math.truncate(sauraMasas * this.celestial.planetarySystem.yuga.Adhimasa / ( 12 * this.celestial.planetarySystem.planets.sun.YugaRotation ));  // expired adhimasas

    const candaMasas = sauraMasas + adhiMasas;  // expired candra masas

    const tithis = 30 * candaMasas + tithiDay - 1; // expired tithis

    const avamas = math.truncate(tithis * this.celestial.planetarySystem.yuga.Ksayadina / this.celestial.planetarySystem.yuga.Tithi); // expired avamas

    return tithis - avamas;
  }

  kaliToSaka(yearKali) {
    return yearKali - 3179;
  }

  sakaToKali(yearSaka) {
    return yearSaka + 3179;
  }

  julianDayToWeekday(julianDay) {
    return this.weekdays[math.truncate(julianDay + 0.5) % 7];
  }

  getAdhimasa(lastConjunctionLongitude, nextConjunctionLongitude) {
    let n1 = math.truncate(lastConjunctionLongitude / 30);
    let n2 = math.truncate(nextConjunctionLongitude / 30);
    return math.floatingPointEqual(n1, n2, false) ? 'Adhika-' : '';
  }

  getMasaNum(tslong, clong) {
    let masaNum = math.truncate(tslong / 30) % 12;
    if (masaNum === math.truncate(clong / 30) % 12) {
      masaNum += 1;
    }
    masaNum = (masaNum + 12) % 12;
    return masaNum;
  }

  getMasaName(masaNum) {
    return this.masaNames[masaNum];
  }

  findSamkranti(leftAhargana, rightAhargana) {
    let width = (rightAhargana - leftAhargana) / 2;
    let centreAhargana = (rightAhargana + leftAhargana) / 2;

    if (width < math.epsilon) {
      return centreAhargana;
    } else {
      let centreTslong = this.celestial.getTrueSolarLongitude(centreAhargana);
      centreTslong -= math.truncate(centreTslong / 30) * 30;
      if (centreTslong < 5) {
        return this.findSamkranti(leftAhargana, centreAhargana);
      } else {
        return this.findSamkranti(centreAhargana, rightAhargana);
      }
    }
  }

  calculateSamkranti(ahargana, desantara) {
    this.samkranti.ahargana = this.findSamkranti(ahargana, ahargana + 1) + desantara;
    // below line is the fix that Yano-san worked in for Kerala dates - #20140223 cf. try_calculations
    let roundedSamkranti = math.truncate(this.samkranti.ahargana) + 0.5;
    let samkrantiModernDate = this.julianDayToModernDate(this.aharganaToJulianDay(roundedSamkranti));
    if (JulianDate.prototype.isPrototypeOf(samkrantiModernDate)) {
      this.samkranti.Year = samkrantiModernDate.year;
      this.samkranti.Month = samkrantiModernDate.month;
      this.samkranti.Day = samkrantiModernDate.day;
    } else {
      this.samkranti.Year = samkrantiModernDate.getFullYear();
      this.samkranti.Month = samkrantiModernDate.getMonth() + 1;
      this.samkranti.Day = samkrantiModernDate.getDate();
    }
    let fractionalDay = math.fractional(this.samkranti.ahargana) * 24;
    this.samkranti.Hour = math.truncate(fractionalDay);
    this.samkranti.Min = math.truncate(60 * math.fractional(fractionalDay));
  }

  isTodaySauraMasaFirst(ahargana, desantara) {
    /*
     //    Definition of the first day
     //    samkranti is between today's 0:00 and 24:00
     //    ==
     //    at 0:00 before 30x, at 24:00 after 30x
     */
    let trueSolarLongitudeToday = this.celestial.getTrueSolarLongitude(ahargana - desantara);
    let trueSolarLongitudeTomorrow = this.celestial.getTrueSolarLongitude(ahargana - desantara + 1);

    trueSolarLongitudeToday -= math.truncate(trueSolarLongitudeToday / 30) * 30;
    trueSolarLongitudeTomorrow -= math.truncate(trueSolarLongitudeTomorrow / 30) * 30;

    if (trueSolarLongitudeToday >= 25 && trueSolarLongitudeTomorrow < 5) {
      this.calculateSamkranti(ahargana, desantara);
      return true;
    }

    return false;
  }

  getSauraMasaMonthDay(ahargana, desantara) {
    // If today is the first day then 1
    // Otherwise yesterday's + 1
    let month;
    let day;
    ahargana = math.truncate(ahargana);
    if (this.isTodaySauraMasaFirst(ahargana, desantara)) {
      day = 1;
      let tsLongTomorrow = this.celestial.getTrueSolarLongitude(ahargana + 1);
      month = math.truncate(tsLongTomorrow / 30) % 12;
      month = (month + 12) % 12;
    } else {
      let sauraMasaMonthDay = this.getSauraMasaMonthDay(ahargana - 1, desantara);
      month = sauraMasaMonthDay.month;
      day = sauraMasaMonthDay.day + 1;
    }
    return {month : month, day : day};
  }

  getNaksatra(tllong) {
    return this.naksatras[math.truncate(tllong * 27 / 360)];
  }

}

export default Calendar;
