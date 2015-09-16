/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * Defines the {{#crossLink "KollavarshamDate"}}{{/crossLink}} and {{#crossLink "JulianDate"}}{{/crossLink}} classes
 * @module date
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
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    // TODO: Change this to date
    this.day = day;
  }

  /**
   * Converts the Date to a nicely formatted string with year, month and date
   * @method toString
   * @for BaseDate
   * @return {string}
   */
  toString() {
    return `${ pad(this.year, 4) } ${ pad(this.month, 2) } ${ pad(this.day, 2) }`;
  }
}


/**
 * Represent's a Kollavarsham date's year, month and date
 * @class KollavarshamDate
 * @constructor
 * @param [year=1] {Number} The Kollavarsham year
 * @param [month=1] {Number} The Kollavarsham month
 * @param [day=1] {Number} The Kollavarsham day
 * @extends BaseDate
 */
class KollavarshamDate extends BaseDate {
  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);
    this.gregorianDate = null;
    this.julianDay = null;
    this.weekdayName = null;
    this.mlWeekdayName = null;
    this.ahargana = null;
  }
}

/**
 * Represents a Julian date's year, month and day
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class JulianDate
 * @constructor
 * @param [year=1] {Number} Julian year
 * @param [month=1] {Number} Julian month
 * @param [day=1] {Number} Julian day
 * @extends BaseDate
 */
class JulianDate extends BaseDate {
  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);
  }
}

export {JulianDate, KollavarshamDate};
