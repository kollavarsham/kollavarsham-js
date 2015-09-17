/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * Defines the {{#crossLink "BaseDate"}}{{/crossLink}} which is inherited by {{#crossLink "KollavarshamDate"}}{{/crossLink}} and {{#crossLink "JulianDate"}}{{/crossLink}} classes
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

export default BaseDate;
