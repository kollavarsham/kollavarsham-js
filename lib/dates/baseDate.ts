/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2020 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module baseDate
 */
import { Calendar } from '../calendar';

const pad = function (num: number, size: number): string {
  const s = `000000000${num}`;
  return s.substr(s.length - size);
};

export interface Naksatra {
  readonly saka: string;
  readonly enMalayalam: string;
  readonly mlMalayalam: string;
}

export interface MasaName {
  readonly saka: string;
  readonly saura: string;
  readonly enMalayalam: string;
  readonly mlMalayalam: string;
}

interface MasaNameList {
  [key: number]: MasaName;
}

const masaNames: MasaNameList = {
  [0]  : { saka : 'Caitra    ', saura : 'Mesa      ', enMalayalam : 'Chingam   ', mlMalayalam : 'ചിങ്ങം' },
  [1]  : { saka : 'Vaisakha  ', saura : 'Vrsa      ', enMalayalam : 'Kanni     ', mlMalayalam : 'കന്നി' },
  [2]  : { saka : 'Jyaistha  ', saura : 'Mithuna   ', enMalayalam : 'Thulam    ', mlMalayalam : 'തുലാം' },
  [3]  : { saka : 'Asadha    ', saura : 'Karkata   ', enMalayalam : 'Vrischikam', mlMalayalam : 'വൃശ്ചികം' },
  [4]  : { saka : 'Sravana   ', saura : 'Simha     ', enMalayalam : 'Dhanu     ', mlMalayalam : 'ധനു' },
  [5]  : { saka : 'Bhadrapada', saura : 'Kanya     ', enMalayalam : 'Makaram   ', mlMalayalam : 'മകരം' },
  [6]  : { saka : 'Asvina    ', saura : 'Tula      ', enMalayalam : 'Kumbham   ', mlMalayalam : 'കുംഭം' },
  [7]  : { saka : 'Karttika  ', saura : 'Vrscika   ', enMalayalam : 'Meenam    ', mlMalayalam : 'മീനം' },
  [8]  : { saka : 'Margasirsa', saura : 'Dhanus    ', enMalayalam : 'Medam     ', mlMalayalam : 'മേടം' },
  [9]  : { saka : 'Pausa     ', saura : 'Makara    ', enMalayalam : 'Idavam    ', mlMalayalam : 'ഇടവം' },
  [10] : { saka : 'Magha     ', saura : 'Kumbha    ', enMalayalam : 'Mithunam  ', mlMalayalam : 'മിഥുനം' },
  [11] : { saka : 'Phalguna  ', saura : 'Mina      ', enMalayalam : 'Karkitakam', mlMalayalam : 'കർക്കടകം' }
};

/**
 * Serves as the base class for both the {@link JulianDate} and
 * {@link KollavarshamDate} classes.
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class BaseDate
 * @constructor
 * @param year {Number}
 * @param month {Number}
 * @param day {Number}
 */
export abstract class BaseDate {

  /**
   * The year corresponding to this instance of the date.
   *
   * @property year
   * @type {Number}
   */
  year: number;

  /**
   * The month corresponding to this instance of the date.
   *
   * @property month
   * @type {Number}
   */
  month: number;

  /**
   * The date corresponding to this instance of the date.
   *
   * @property date
   * @type {Number}
   */
  date: number;

  /**
   * The gregorian date corresponding to this instance of the date. **Set separately after an instance is created**
   *
   * @property gregorianDate
   * @type {Date}
   */
  gregorianDate: Date;

  /**
   * The `Julian Day` corresponding to this instance of the date. **Set separately after an instance is created**
   * Julian day is the continuous count of days since the beginning of the Julian Period used primarily by astronomers.
   *
   * _Source_: https://en.wikipedia.org/wiki/Julian_day
   *
   * @property julianDay
   * @type {Number}
   */
  julianDay: number;

  /**
   * The `Ahargana` corresponding to this instance of the date. **Set separately after an instance is created**
   *
   * In Sanskrit `ahoratra` means one full day and `gana` means count.
   * Hence, the Ahargana on any given day stands for the number of lunar days that have elapsed starting from an epoch.
   *
   * _Source_: http://cs.annauniv.edu/insight/Reading%20Materials/astro/sharptime/ahargana.htm
   *
   * @property ahargana
   * @type {Number}
   */
  ahargana: number;

  /**
   * The `Saura Masa` (Solar Calendar Month) for this instance of the date. **Set separately after an instance is created**
   *
   * @property sauraMasa
   * @type {Number}
   */
  sauraMasa: number;

  /**
   * The `Saura Divasa` (Solar Calendar Day) for this instance of the date. **Set separately after an instance is created**
   *
   * @property sauraDivasa
   * @type {Number}
   */
  sauraDivasa: number;

  /**
   * The `Naksatra` (Star) for this instance of the date. **Set separately after an instance is created**
   *
   * @property naksatra
   * @type { { saka: String, enMalayalam: string, mlMalayalam: string } }
   */
  private _naksatra: Naksatra = Calendar.naksatras[-1];

  protected constructor(year = 0, month = 0, date = 0) {
    this.year = year;
    this.month = month;
    this.date = date;
    this.gregorianDate = new Date();
    this.julianDay = -1;
    this.ahargana = -1;
    this.sauraMasa = -1;
    this.sauraDivasa = -1;
  }

  get naksatra(): Naksatra {
    return this._naksatra; // eslint-disable-line no-underscore-dangle
  }

  set naksatra(val: Naksatra) {
    this._naksatra = val; // eslint-disable-line no-underscore-dangle
  }

  /**
   * Returns the Saura Masa name for the current instance of date.
   *
   * @property sauraMasaName
   * @type {string}
   */
  get sauraMasaName(): string {
    return BaseDate.getMasaName(this.sauraMasa).saura;
  }

  /**
   * Returns the weekday (in English) for the current instance of date.
   *
   * @property weekdayName
   * @type {string}
   */
  get weekdayName(): string {
    return Calendar.julianDayToWeekday(this.julianDay).en;
  }

  /**
   * Returns the weekday (in Malayalam) for the current instance of date.
   *
   * @property mlWeekdayName
   * @type {string}
   */
  get mlWeekdayName(): string {
    return Calendar.julianDayToWeekday(this.julianDay).ml;
  }

  /**
   * Converts the Date to a nicely formatted string with year, month and date
   *
   * @method toString
   * @for BaseDate
   * @type {string}
   */
  toString(): string {
    return `${pad(this.year, 4)} ${pad(this.month, 2)} ${pad(this.date, 2)}`;
  }

  /**
   * Returns the month names object that has Saka, Saura and Kollavarsham (English & Malayalam) month names for the specified index `masaNumber`
   *
   * @method getMasaName
   * @for BaseDate
   * @param masaNumber {Number}
   * @returns { {saka : {string}, saura : {string}, enMalayalam : {string}, mlMalayalam : {string} } }
   */
  static getMasaName(masaNumber: number): MasaName {
    return masaNames[masaNumber];
  }

}
