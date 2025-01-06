/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2025 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module calendar
 */
import { JulianDate } from './dates/julianDate';
import { MathHelper } from './mathHelper';
import { Celestial } from './celestial/index';
import { Naksatra } from './dates/baseDate';

// TODO: Refactor this out
const samkranti = { // eslint-disable-line no-underscore-dangle
  ahargana : -1,
  Year     : -1,
  Month    : -1,
  Day      : -1,
  Hour     : -1,
  Min      : -1
};

export interface SauraDate {
  sauraMasa: number;
  sauraDivasa: number;
}

export interface WeekDay {
  en: string;
  ml: string;
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Calendar
 */
export class Calendar {
  celestial: Celestial;

  constructor(celestial: Celestial) {
    this.celestial = celestial;
  }

  static get weekdays(): { [key: number]: WeekDay } {
    return {
      0 : { en : 'Monday', ml : 'തിങ്കൾ' },
      1 : { en : 'Tuesday', ml : 'ചൊവ്വ' },
      2 : { en : 'Wednesday', ml : 'ബുധൻ' },
      3 : { en : 'Thursday', ml : 'വ്യാഴം' },
      4 : { en : 'Friday', ml : 'വെള്ളി' },
      5 : { en : 'Saturday', ml : 'ശനി' },
      6 : { en : 'Sunday', ml : 'ഞായർ' }
    };
  }

  static get months(): { [key: string]: number } {
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

  static get naksatras(): { [key: number]: Naksatra } {
    return {
      [-1] : { saka : '', enMalayalam : '', mlMalayalam : '' },
      0    : { saka : 'Asvini', enMalayalam : 'Ashwathi', mlMalayalam : 'അശ്വതി' },
      1    : { saka : 'Bharani', enMalayalam : 'Bharani', mlMalayalam : 'ഭരണി' },
      2    : { saka : 'Krttika', enMalayalam : 'Karthika', mlMalayalam : 'കാർത്തിക' },
      3    : { saka : 'Rohini', enMalayalam : 'Rohini', mlMalayalam : 'രോഹിണി' },
      4    : { saka : 'Mrgasira', enMalayalam : 'Makiryam', mlMalayalam : 'മകയിരം' },
      5    : { saka : 'Ardra', enMalayalam : 'Thiruvathira', mlMalayalam : 'തിരുവാതിര' },
      6    : { saka : 'Punarvasu', enMalayalam : 'Punartham', mlMalayalam : 'പുണർതം' },
      7    : { saka : 'Pusya', enMalayalam : 'Pooyam', mlMalayalam : 'പൂയം' },
      8    : { saka : 'Aslesa', enMalayalam : 'Aayilyam', mlMalayalam : 'ആയില്യം' },
      9    : { saka : 'Magha', enMalayalam : 'Makam', mlMalayalam : 'മകം' },
      10   : { saka : 'P-phalguni', enMalayalam : 'Pooram', mlMalayalam : 'പൂരം' },
      11   : { saka : 'U-phalguni', enMalayalam : 'Uthram', mlMalayalam : 'ഉത്രം' },
      12   : { saka : 'Hasta', enMalayalam : 'Atham', mlMalayalam : 'അത്തം' },
      13   : { saka : 'Citra', enMalayalam : 'Chithra', mlMalayalam : 'ചിത്ര' },
      14   : { saka : 'Svati', enMalayalam : 'Chothi', mlMalayalam : 'ചോതി' },
      15   : { saka : 'Visakha', enMalayalam : 'Vishakham', mlMalayalam : 'വിശാഖം' },
      16   : { saka : 'Anuradha', enMalayalam : 'Anizham', mlMalayalam : 'അനിഴം' },
      17   : { saka : 'Jyestha', enMalayalam : 'Thrikketta', mlMalayalam : 'തൃക്കേട്ട' },
      18   : { saka : 'Mula', enMalayalam : 'Moolam', mlMalayalam : 'മൂലം' },
      19   : { saka : 'P-asadha', enMalayalam : 'Pooradam', mlMalayalam : 'പൂരാടം' },
      20   : { saka : 'U-asadha', enMalayalam : 'Uthradam', mlMalayalam : 'ഉത്രാടം' },
      21   : { saka : 'Sravana', enMalayalam : 'Thiruvonam', mlMalayalam : 'തിരുവോണം' },
      22   : { saka : 'Dhanistha', enMalayalam : 'Avittam', mlMalayalam : 'അവിട്ടം' },
      23   : { saka : 'Satabhisaj', enMalayalam : 'Chathayam', mlMalayalam : 'ചതയം' },
      24   : { saka : 'P-bhadrapada', enMalayalam : 'Poororuttathi', mlMalayalam : 'പൂരുരുട്ടാതി' },
      25   : { saka : 'U-bhadrapada', enMalayalam : 'Uthrattathi', mlMalayalam : 'ഉത്രട്ടാതി' },
      26   : { saka : 'Revati', enMalayalam : 'Revathi', mlMalayalam : 'രേവതി' },
      27   : { saka : 'Asvini', enMalayalam : 'Ashwathi', mlMalayalam : 'അശ്വതി' }
    };
  }

  static timeIntoFractionalDay(date: Date): number {
    // TODO: Incorporate this into calculating the multiple-naksatra-per-day (time precision)
    // The year, month and day from the passed in date is discarded and only the time is used.
    // And even from the time information only the hour and minute is used and seconds, milliseconds etc. is discarded
    if (!(date instanceof Date)) {
      throw new Error('Invalid parameter. \'date\' should be an instance of \'Date\'');
    }
    const hour = date.getHours();
    const minute = date.getMinutes();
    return (hour * 60 + minute) / (24 * 60);
  }

  static gregorianDateToJulianDay(date: Date): number {
    //  TODO:
    // Annotate all the magic numbers below !
    // There is some explanation here - http://quasar.as.utexas.edu/BillInfo/JulianDatesG.html

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    const day = date.getDate();

    if (month < 3) {
      year -= 1;
      month += 12;
    }

    let julianDay = MathHelper.truncate(365.25 * year) + MathHelper.truncate(30.59 * (month - 2)) + day + 1721086.5;

    if (year < 0) {
      julianDay -= 1;
      if (year % 4 === 0 && month > 3) {
        julianDay += 1;
      }
    }

    if (julianDay >= 2299160) {
      julianDay += MathHelper.truncate(year / 400) - MathHelper.truncate(year / 100) + 2;
    }

    return julianDay;
  }

  static julianDayToJulianDate(julianDay: number): JulianDate {
    const j = MathHelper.truncate(julianDay) + 1402;
    const k = MathHelper.truncate((j - 1) / 1461);
    const l = j - 1461 * k;
    const n = MathHelper.truncate((l - 1) / 365) - MathHelper.truncate(l / 1461);
    const i = l - 365 * n + 30;
    const J = MathHelper.truncate(80 * i / 2447);
    const I = MathHelper.truncate(J / 11);

    const day = i - MathHelper.truncate(2447 * J / 80);
    const month = J + 2 - 12 * I;
    const year = 4 * k + n + I - 4716;

    return new JulianDate(year, month, day);
  }

  static julianDayToGregorianDate(julianDay: number): Date {
    const a = julianDay + 68569;
    const b = MathHelper.truncate(a / 36524.25);
    const c = a - MathHelper.truncate(36524.25 * b + 0.75);
    const e = MathHelper.truncate((c + 1) / 365.2425);
    const f = c - MathHelper.truncate(365.25 * e) + 31;
    const g = MathHelper.truncate(f / 30.59);
    const h = MathHelper.truncate(g / 11);

    const day = MathHelper.truncate(f - MathHelper.truncate(30.59 * g) + (julianDay - MathHelper.truncate(julianDay)));
    const month = MathHelper.truncate(g - 12 * h + 2);
    const year = MathHelper.truncate(100 * (b - 49) + e + h);

    const result = new Date(year, month - 1, day);
    if (year > 0 && year <= 99) {
      result.setFullYear(year);
    }
    return result;
  }

  static julianDayToModernDate(julianDay: number): (Date | JulianDate) {
    // Will return JulianDate object for any date before 1st January 1583 AD and Date objects for later dates
    return julianDay < 2299239 ? Calendar.julianDayToJulianDate(julianDay) : Calendar.julianDayToGregorianDate(julianDay);
  }

  static julianDayToAhargana(julianDay: number): number {
    return julianDay - 588465.50;
  }

  static aharganaToJulianDay(ahargana: number): number {
    return 588465.50 + ahargana;
  }

  static kaliToSaka(yearKali: number): number {
    return yearKali - 3179;
  }

  static sakaToKali(yearSaka: number): number {
    return yearSaka + 3179;
  }

  static julianDayToWeekday(julianDay: number): WeekDay {
    return Calendar.weekdays[MathHelper.truncate(julianDay + 0.5) % 7];
  }

  static getAdhimasa(lastConjunctionLongitude: number, nextConjunctionLongitude: number): string {
    const n1 = MathHelper.truncate(lastConjunctionLongitude / 30);
    const n2 = MathHelper.truncate(nextConjunctionLongitude / 30);
    return Math.abs(n1 - n2) < MathHelper.epsilon ? 'Adhika-' : '';
  }

  static getMasaNum(trueSolarLongitude: number, lastConjunctionLongitude: number): number {
    let masaNum = MathHelper.truncate(trueSolarLongitude / 30) % 12;
    if (masaNum === MathHelper.truncate(lastConjunctionLongitude / 30) % 12) {
      masaNum += 1;
    }
    masaNum = (masaNum + 12) % 12;
    return masaNum;
  }

  static getNaksatra(trueLunarLongitude: number): Naksatra {
    return Calendar.naksatras[MathHelper.truncate(trueLunarLongitude * 27 / 360)];
  }

  nextDate(date: Date): Date {
    // TODO: This looks like a concern of the calling library - But could be exposed as a static utility method (0 usages other than tests)
    date.setUTCDate(date.getUTCDate() + 1);
    return date;
  }

  julianInEngland(julianDay: number): boolean {
    // TODO: This might be exposed as a static utility method (0 usages other than tests)
    // Gregorian calendar was first introduced in most of Europe in 1582,
    // but it wasn't adopted in England (and so in US and Canada) until 1752
    //
    // - http://www.timeanddate.com/calendar/julian-gregorian-switch.html
    //
    // This returns true between
    //      October 14th, 1582 and September 14th, 1752, both dates exclusive
    return julianDay >= 2299160 && julianDay <= 2361221;
  }

  aharganaToKali(ahargana: number): number {
    return MathHelper.truncate(ahargana * this.celestial.planets.sun.YugaRotation / this.celestial.yuga.CivilDays);
  }

  kaliToAhargana(yearKali: number, masaNum: number, tithiDay: number): number {
    const sauraMasas = yearKali * 12 + masaNum; // expired saura masas

    const adhiMasas = MathHelper.truncate(sauraMasas * this.celestial.yuga.Adhimasa / (12 * this.celestial.planets.sun.YugaRotation)); // expired adhimasas

    const candraMasas = sauraMasas + adhiMasas; // expired candra masas

    const tithis = 30 * candraMasas + tithiDay - 1; // expired tithis

    const avamas = MathHelper.truncate(tithis * this.celestial.yuga.Ksayadina / this.celestial.yuga.Tithi); // expired avamas

    return tithis - avamas;
  }

  findSamkranti(leftAhargana: number, rightAhargana: number): number {
    const width = (rightAhargana - leftAhargana) / 2;
    const centreAhargana = (rightAhargana + leftAhargana) / 2;

    if (width < MathHelper.epsilon) {
      return centreAhargana;
    } else {
      let centreTslong = this.celestial.getTrueSolarLongitude(centreAhargana);
      centreTslong -= MathHelper.truncate(centreTslong / 30) * 30;
      if (centreTslong < 5) {
        return this.findSamkranti(leftAhargana, centreAhargana);
      } else {
        return this.findSamkranti(centreAhargana, rightAhargana);
      }
    }
  }

  calculateSamkranti(ahargana: number, desantara: number): void {
    samkranti.ahargana = this.findSamkranti(ahargana, ahargana + 1) + desantara;
    // below line is the fix that Yano-san worked in for Kerala dates - #20140223 cf. try_calculations
    const roundedSamkranti = MathHelper.truncate(samkranti.ahargana) + 0.5;
    const samkrantiModernDate = Calendar.julianDayToModernDate(Calendar.aharganaToJulianDay(roundedSamkranti));
    if (JulianDate.prototype.isPrototypeOf(samkrantiModernDate)) { // eslint-disable-line no-prototype-builtins
      const samkrantiDate = samkrantiModernDate as JulianDate;
      samkranti.Year = samkrantiDate.year;
      samkranti.Month = samkrantiDate.month;
      samkranti.Day = samkrantiDate.date;
    } else {
      const samkrantiDate = samkrantiModernDate as Date;
      samkranti.Year = samkrantiDate.getFullYear();
      samkranti.Month = samkrantiDate.getMonth() + 1;
      samkranti.Day = samkrantiDate.getDate();
    }
    const fractionalDay = MathHelper.fractional(samkranti.ahargana) * 24;
    samkranti.Hour = MathHelper.truncate(fractionalDay);
    samkranti.Min = MathHelper.truncate(60 * MathHelper.fractional(fractionalDay));
  }

  isTodaySauraMasaFirst(ahargana: number, desantara: number): boolean {
    /*
     //    Definition of the first day
     //    samkranti is between today's 0:00 and 24:00
     //    ==
     //    at 0:00 before 30x, at 24:00 after 30x
     */
    let trueSolarLongitudeToday = this.celestial.getTrueSolarLongitude(ahargana - desantara);
    let trueSolarLongitudeTomorrow = this.celestial.getTrueSolarLongitude(ahargana - desantara + 1);

    trueSolarLongitudeToday -= MathHelper.truncate(trueSolarLongitudeToday / 30) * 30;
    trueSolarLongitudeTomorrow -= MathHelper.truncate(trueSolarLongitudeTomorrow / 30) * 30;

    if (25 < trueSolarLongitudeToday && trueSolarLongitudeTomorrow < 5) { // eslint-disable-line yoda
      this.calculateSamkranti(ahargana, desantara);
      return true;
    }

    return false;
  }

  getSauraMasaAndSauraDivasa(ahargana: number, desantara: number): SauraDate {
    // If today is the first day then 1
    // Otherwise yesterday's + 1
    let month;
    let day;
    ahargana = MathHelper.truncate(ahargana);
    if (this.isTodaySauraMasaFirst(ahargana, desantara)) {
      day = 1;
      const tsLongTomorrow = this.celestial.getTrueSolarLongitude(ahargana + 1);
      month = MathHelper.truncate(tsLongTomorrow / 30) % 12;
      month = (month + 12) % 12;
    } else {
      const { sauraMasa, sauraDivasa } = this.getSauraMasaAndSauraDivasa(ahargana - 1, desantara);
      month = sauraMasa;
      day = sauraDivasa + 1;
    }
    return { sauraMasa : month, sauraDivasa : day };
  }

}
