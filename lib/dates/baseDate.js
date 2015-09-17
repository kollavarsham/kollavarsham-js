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

const pad = function (num, size) {
  const s = `000000000${ num }`;
  return s.substr(s.length - size);
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
  constructor(year, month, date) {

    /**
     * The year corresponding to this instance of the date.
     *
     * @property gregorianDate
     * @type {Date}
     */
    this.year = year;

    /**
     * The month corresponding to this instance of the date.
     *
     * @property month
     * @type {Date}
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
     * @property sauraMasaNumber
     * @type {Number}
     */
    this.sauraMasa = null;

    /**
     * The `Saura Divasa` (Solar Calendar Day) for this instance of the date. **Set separately after an instance is created**
     *
     * @property sauraDivasaNumber
     * @type {Number}
     */
    this.sauraDivasa = null;
  }

  /**
   * Converts the Date to a nicely formatted string with year, month and date
   * @method toString
   * @for BaseDate
   * @return {string}
   */
  toString() {
    return `${ pad(this.year, 4) } ${ pad(this.month, 2) } ${ pad(this.date, 2) }`;
  }
}

export default BaseDate;
