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

class JulianDate extends BaseDate {
  constructor(year, month, day) {
    super(year, month, day);
  }
}

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
export {JulianDate, KollavarshamDate};
