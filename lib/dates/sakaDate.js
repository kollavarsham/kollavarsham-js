/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * Defines the {{#crossLink "SakaDate"}}{{/crossLink}} class
 * @module indianDate
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
     * The gregorian date corresponding to this instance of SakaDate. Set separately after an instance is created
     *
     * @property gregorianDate
     * @type {Date}
     */
    this.gregorianDate = null;

    /**
     * The `Julian Day` corresponding to this instance of SakaDate. Set separately after an instance is created
     * Julian day is the continuous count of days since the beginning of the Julian Period used primarily by astronomers.
     * _Source_: https://en.wikipedia.org/wiki/Julian_day
     *
     * @property julianDay
     * @type {Number}
     */
    this.julianDay = null;

    /**
     * The `Ahargana` corresponding to this instance of SakaDate. Set separately after an instance is created
     * In Sanskrit `ahoratra` means one full day and `gana` means count.
     * Hence, the Ahargana on any given day stands for the number of lunar days that have elapsed starting from an epoch.
     * _Source_: http://cs.annauniv.edu/insight/Reading%20Materials/astro/sharptime/ahargana.htm
     *
     * @property ahargana
     * @type {Number}
     */
    this.ahargana = null;

    /**
     * The `Saura Masa` (Solar Calendar Month) for this instance of SakaDate. Set separately after an instance is created
     *
     * @property sauraMasaNumber
     * @type {Number}
     */
    this.sauraMasa = null;

    /**
     * The `Saura Divasa` (Solar Calendar Day) for this instance of SakaDate. Set separately after an instance is created
     *
     * @property sauraDivasaNumber
     * @type {Number}
     */
    this.sauraDivasa = null;
  }

  get tithi() {
    return this.day;
  }

  toString() {
    return `${ super.toString() } ${this.paksa}`;
  }
}

export default SakaDate;
