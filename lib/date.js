/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * Defines the KollavarshamDate and JulianDate classes
 * @module date
 */

/**
 * Pads zeroes to print the date in a pretty format
 * @private
 * @param num
 * @param size
 * @returns {string}
 */
const pad = function (num, size) {
  const s = `000000000${ num }`;
  return s.substr(s.length - size);
};

/**
 * Serves as the base class for both the {{#crossLink "JulianDate"}}{{/crossLink}} and
 * {{#crossLink "KollavarshamDate"}}{{/crossLink}} classes.
 *
 *  ** INTERNAL/PRIVATE **
 *
 * @class BaseDate
 * @private
 */
class BaseDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    // TODO: Change this to date
    this.day = day;
  }

  /**
   * Converts the Date to a nicely formatted string with year, month and date
   * @method toString
   * @for JulianDate
   * @return {string}
   */
  toString() {
    return `${ pad(this.year, 4) } ${ pad(this.month, 2) } ${ pad(this.day, 2) }`;
  }
}

/****************** Julian Date (private) ***************************/

/**
 * Represents a Julian date's year, month and day
 *
 *  ** INTERNAL/PRIVATE **
 *
 * @class JulianDate
 */
class JulianDate extends BaseDate {
  /**
   * @param [year=1] {Number} Julian year
   * @param [month=1] {Number} Julian month
   * @param [day=1] {Number} Julian day
   * @constructor
   */
  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);
  }
}

/****************** Kollavarsham Date *******************************/

/**
 * Represent's a Kollavarsham date's year, month and date
 * @class KollavarshamDate
 */
class KollavarshamDate extends BaseDate {
  /**
   * @param [year=1] {Number} The Kollavarsham year
   * @param [month=1] {Number} The Kollavarsham month
   * @param [day=1] {Number} The Kollavarsham day
   * @constructor
   */
  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);
    this.gregorianDate = null;
    this.julianDay = null;
    this.weekdayName = null;
    this.mlWeekdayName = null;
    this.ahargana = null;
  }
}

export {JulianDate, KollavarshamDate};
