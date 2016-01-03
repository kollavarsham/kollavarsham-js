/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2016 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module sakaDate
 */
import BaseDate from './baseDate.js';
import KollavarshamDate from './kollavarshamDate.js';
import MathHelper from '../mathHelper.js';

/**
 * Represents an Saka date's year, month and paksa and tithi
 * @class SakaDate
 * @constructor
 * @param [year=1] {Number} Saka Year
 * @param [month=1] {Number} Saka Month
 * @param [tithi=1] {Number} Lunar Day
 * @param [paksa='Suklapaksa'] {string} Lunar Phase - Valid values are `Suklapaksa` (default) or 'Krsnapaksa`
 * @extends BaseDate
 */
class SakaDate extends BaseDate {

  constructor(year = 1, month = 1, tithi = 1, paksa = 'Suklapaksa') {

    super(year, month, tithi);

    /**
     * The Paksha/Paksa corresponding to this instance of the date.
     *
     * Paksha (or pakṣa: Sanskrit: पक्ष), refers to a fortnight or a lunar phase in a month of the Hindu lunar calendar.
     *
     * _Source_: https://en.wikipedia.org/wiki/Paksha
     *
     * @property paksa
     * @type {string}
     */
    this.paksa = paksa === 'Krsnapaksa' ? paksa : 'Suklapaksa';

    /**
     * The Kali year corresponding to this instance of the date. **Set separately after an instance is created**
     *
     * @property kaliYear
     * @type {Number}
     */
    this.kaliYear = null;

    /**
     * The Adhimasa (`Adhika Masa`) prefix corresponding to this instance of the date. **Set separately after an instance is created**
     *
     * @property adhimasa
     * @type {string}
     */
    this.adhimasa = null;

    /**
     * The fractional `Tithi`corresponding to this instance of the date. **Set separately after an instance is created**
     *
     * @property fractionalTithi
     * @type {Number}
     */
    this.fractionalTithi = null;

    /**
     * The hour part from the sunrise time for this date. **Set separately after an instance is created**
     *
     * @property sunriseHour
     * @type {Number}
     */
    this.sunriseHour = null;

    /**
     * The minute part from the sunrise time for this date. **Set separately after an instance is created**
     *
     * @property sunriseMinute
     * @type {Number}
     */
    this.sunriseMinute = null;
  }

  /**
   * Returns the Saka year on this instance of SakaDate (same as the underlyiung `year` property from the {{#crossLink "BaseDate"}}{{/crossLink}} class)
   *
   * @property sakaYear
   * @type {Number}
   */
  get sakaYear() {
    return this.year;
  }

  /**
   * Returns the Tithi on this instance of SakaDate (same as the underlyiung `date` property from the {{#crossLink "BaseDate"}}{{/crossLink}} class)
   *
   * In Vedic timekeeping, a tithi (also spelled thithi) is a lunar day, or the time it takes for the longitudinal angle between the Moon and the Sun to increase by 12°.
   * Tithis begin at varying times of day and vary in duration from approximately 19 to approximately 26 hours.
   *
   * _Source_: https://en.wikipedia.org/wiki/Tithi
   *
   * @property tithi
   * @type {Number}
   */
  get tithi() {
    return this.date;
  }

  /**
   * Returns the Vikrama year corresponding to the Saka year of this instance.
   *
   * @property vikramaYear
   * @type {Number}
   */
  get vikramaYear() {
    return this.year + 135;
  }

  /**
   * Returns the Saka Naksatra name for this instance of SakaDate
   *
   * @property naksatraName
   * @type {string}
   */
  get naksatraName() {
    return this.naksatra.saka;
  }

  /**
   * Returns the month name for this instance of SakaDate
   *
   * @property masaName
   * @type {string}
   */
  get masaName() {
    return SakaDate.getMasaName(this.month).saka;
  }

  /**
   * Generates an instance of {{#crossLink "KollavarshamDate"}}{{/crossLink}} from this instance of SakaDate
   *
   * @method generateKollavarshamDate
   * @for SakaDate
   * @returns {KollavarshamDate}
   */
  generateKollavarshamDate() {
    // TODO: Add unit tests
    const malayalaMasa = (this.sauraMasa - 4 + 12 ) % 12;

    // Sewell p.45 - https://archive.org/stream/indiancalendarwi00sewerich#page/45/mode/1up
    const malayalamYear = this.year - 747 + MathHelper.truncate((this.month - malayalaMasa + 12) / 12);

    const kollavarshamDate = new KollavarshamDate(malayalamYear, malayalaMasa + 1, this.sauraDivasa);

    kollavarshamDate.gregorianDate = this.gregorianDate;
    kollavarshamDate.julianDay = this.julianDay;

    kollavarshamDate.ahargana = this.ahargana;
    kollavarshamDate.sauraMasa = this.sauraMasa;
    kollavarshamDate.sauraDivasa = this.sauraDivasa;
    kollavarshamDate.naksatra = this.naksatra;

    // TODO: As fail-Safe for getting any other properties from the SakaDate, store a copy here directly
    kollavarshamDate.sakaDate = this;

    return kollavarshamDate;
  }

  toString() {
    return `${ super.toString() } ${this.paksa}`;
  }

}

export default SakaDate;
