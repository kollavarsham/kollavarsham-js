/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module baseDate
 */
import Calendar from '../calendar.js';

const pad = function (num, size) {
  const s = `000000000${ num }`;
  return s.substr(s.length - size);
};

const masaNames = {
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

/**
 * Serves as the base class for both the {{#crossLink "JulianDate"}}{{/crossLink}} and
 * {{#crossLink "KollavarshamDate"}}{{/crossLink}} classes.
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class BaseDate
 * @constructor
 * @param year {Number}
 * @param month {Number}
 * @param day {Number}
 */
class BaseDate {

  constructor(year = 0, month = 0, date = 0) {

    /**
     * The year corresponding to this instance of the date.
     *
     * @property year
     * @type {Number}
     */
    this.year = year;

    /**
     * The month corresponding to this instance of the date.
     *
     * @property month
     * @type {Number}
     */
    this.month = month;

    /**
     * The date corresponding to this instance of the date.
     *
     * @property date
     * @type {Number}
     */
    this.date = date;

    /**
     * The gregorian date corresponding to this instance of the date. **Set separately after an instance is created**
     *
     * @property gregorianDate
     * @type {Date}
     */
    this.gregorianDate = null;

    /**
     * The `Julian Day` corresponding to this instance of the date. **Set separately after an instance is created**
     * Julian day is the continuous count of days since the beginning of the Julian Period used primarily by astronomers.
     *
     * _Source_: https://en.wikipedia.org/wiki/Julian_day
     *
     * @property julianDay
     * @type {Number}
     */
    this.julianDay = null;

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
    this.ahargana = null;

    /**
     * The `Saura Masa` (Solar Calendar Month) for this instance of the date. **Set separately after an instance is created**
     *
     * @property sauraMasa
     * @type {Number}
     */
    this.sauraMasa = null;

    /**
     * The `Saura Divasa` (Solar Calendar Day) for this instance of the date. **Set separately after an instance is created**
     *
     * @property sauraDivasa
     * @type {Number}
     */
    this.sauraDivasa = null;

    /**
     * The `Naksatra` (Star) for this instance of the date. **Set separately after an instance is created**
     *
     * @property naksatra
     * @type { { saka: String, enMalayalam: string, mlMalayalam: string } }
     */
    this._naksatra = null;  // eslint-disable-line no-underscore-dangle
  }

  get naksatra() {
    return this._naksatra || {};  // eslint-disable-line no-underscore-dangle
  }

  set naksatra(val) {
    this._naksatra = val;  // eslint-disable-line no-underscore-dangle
  }

  /**
   * Returns the Saura Masa name for the current instance of date.
   *
   * @property sauraMasaName
   * @type {string}
   */
  get sauraMasaName() {
    return BaseDate.getMasaName(this.sauraMasa).saura;
  }

  /**
   * Returns the weekday (in English) for the current instance of date.
   *
   * @property weekdayName
   * @type {string}
   */
  get weekdayName() {
    return Calendar.julianDayToWeekday(this.julianDay).en;
  }

  /**
   * Returns the weekday (in Malayalam) for the current instance of date.
   *
   * @property mlWeekdayName
   * @type {string}
   */
  get mlWeekdayName() {
    return Calendar.julianDayToWeekday(this.julianDay).ml;
  }

  /**
   * Converts the Date to a nicely formatted string with year, month and date
   *
   * @method toString
   * @for BaseDate
   * @type {string}
   */
  toString() {
    return `${ pad(this.year, 4) } ${ pad(this.month, 2) } ${ pad(this.date, 2) }`;
  }

  /**
   * Returns the month names object that has Saka, Saura and Kollavarsham (English & Malayalam) month names for the specified index `masaNumber`
   *
   * @method getMasaName
   * @for BaseDate
   * @param masaNumber {Number}
   * @returns { {saka : {string}, saura : {string}, enMalayalam : {string}, mlMalayalam : {string} } }
   */
  static getMasaName(masaNumber) {
    return masaNames[masaNumber];
  }

}

export default BaseDate;
