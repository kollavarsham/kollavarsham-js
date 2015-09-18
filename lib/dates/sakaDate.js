/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module sakaDate
 */


import BaseDate from './baseDate.js';

/**
 * Represents an Saka date's year, month and paksa and tithi
 * @class SakaDate
 * @constructor
 * @param [year=1] {Number} Saka Year
 * @param [month=1] {Number} Saka Month
 * @param [tithi=1] {Number}
 * @param [paksa='Suklapaksa'] {string} Valid values are `Suklapaksa` (default) or 'Krsnapaksa`
 * @extends BaseDate
 */
class SakaDate extends BaseDate {
  constructor(year = 1, month = 1, tithi = 1, paksa = 'Suklapaksa') {

    super(year, month, tithi);

    this.paksa = paksa === 'Krsnapaksa' ? paksa : 'Suklapaksa';

    /**
     * The Kali year corresponding to this instance of the date. **Set separately after an instance is created**
     *
     * @property kaliYear
     * @type {Number}
     */
    this.kaliYear = null;
  }

  /**
   * Returns the Saka year on this instance of SakaDate (same as the underlyiung `year` property from the {{#crossLink "BaseDate"}}{{/crossLink}} class)
   *
   * @property sakaYear
   * @returns {Number}
   */
  get sakaYear() {
    return this.year;
  }

  /**
   * Returns the tithi on this instance of SakaDate (same as the underlyiung `date` property from the {{#crossLink "BaseDate"}}{{/crossLink}} class)
   *
   * @property tithi
   * @returns {Number}
   */
  get tithi() {
    return this.date;
  }

  /**
   * Returns the Vikrama year corresponding to the Saka year of this instance.
   *
   * @returns {Number}
   */
  get vikramaYear() {
    return this.year + 135;
  }

  /**
   * Returns the Saka Naksatra name for this instance of SakaDate
   *
   * @returns {string}
   */
  get naksatraName() {
    return this.naksatra.saka;
  }

  toString() {
    return `${ super.toString() } ${this.paksa}`;
  }
}

export default SakaDate;
