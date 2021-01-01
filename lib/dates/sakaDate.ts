/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2021 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module sakaDate
 */
import { BaseDate } from './baseDate';
import { KollavarshamDate } from './kollavarshamDate';
import { MathHelper } from '../mathHelper';

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
export class SakaDate extends BaseDate {

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
  paksa: string;

  /**
   * The Kali year corresponding to this instance of the date. **Set separately after an instance is created**
   *
   * @property kaliYear
   * @type {Number}
   */
  kaliYear: number;

  /**
   * The Adhimasa (`Adhika Masa`) prefix corresponding to this instance of the date. **Set separately after an instance is created**
   *
   * @property adhimasa
   * @type {string}
   */
  adhimasa: string;

  /**
   * The fractional `Tithi`corresponding to this instance of the date. **Set separately after an instance is created**
   *
   * @property fractionalTithi
   * @type {Number}
   */
  fractionalTithi: number;

  /**
   * The hour part from the sunrise time for this date. **Set separately after an instance is created**
   *
   * @property sunriseHour
   * @type {Number}
   */
  sunriseHour: number;

  /**
   * The minute part from the sunrise time for this date. **Set separately after an instance is created**
   *
   * @property sunriseMinute
   * @type {Number}
   */
  sunriseMinute: number;

  /**
   * The original ahargana passed in to the celestial calculations (TODO: Not sure why we need this!?)
   */
  originalAhargana: number;

  constructor(year = 1, month = 1, tithi = 1, paksa = 'Suklapaksa') {

    super(year, month, tithi);

    this.paksa = paksa === 'Krsnapaksa' ? paksa : 'Suklapaksa';
    this.kaliYear = -1;
    this.adhimasa = '';
    this.fractionalTithi = -1;
    this.sunriseHour = -1;
    this.sunriseMinute = -1;
    this.originalAhargana = -1;
  }

  /**
   * Returns the Saka year on this instance of SakaDate (same as the underlyiung `year` property from the {@link BaseDate} class)
   *
   * @property sakaYear
   * @type {Number}
   */
  get sakaYear(): number {
    return this.year;
  }

  /**
   * Returns the Tithi on this instance of SakaDate (same as the underlyiung `date` property from the {@link BaseDate} class)
   *
   * In Vedic timekeeping, a tithi (also spelled thithi) is a lunar day, or the time it takes for the longitudinal angle between the Moon and the Sun to increase by 12°.
   * Tithis begin at varying times of day and vary in duration from approximately 19 to approximately 26 hours.
   *
   * _Source_: https://en.wikipedia.org/wiki/Tithi
   *
   * @property tithi
   * @type {Number}
   */
  get tithi(): number {
    return this.date;
  }

  /**
   * Returns the Vikrama year corresponding to the Saka year of this instance.
   *
   * @property vikramaYear
   * @type {Number}
   */
  get vikramaYear(): number {
    return this.year + 135;
  }

  /**
   * Returns the Saka Naksatra name for this instance of SakaDate
   *
   * @property naksatraName
   * @type {string}
   */
  get naksatraName(): string {
    return this.naksatra.saka;
  }

  /**
   * Returns the month name for this instance of SakaDate
   *
   * @property masaName
   * @type {string}
   */
  get masaName(): string {
    return SakaDate.getMasaName(this.month).saka;
  }

  /**
   * Generates an instance of {@link KollavarshamDate} from this instance of SakaDate
   *
   * @method generateKollavarshamDate
   * @for SakaDate
   * @returns {KollavarshamDate}
   */
  generateKollavarshamDate(): KollavarshamDate {
    // TODO: Add unit tests
    const malayalaMasa = (this.sauraMasa - 4 + 12) % 12;

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

  toString(): string {
    return `${super.toString()} ${this.paksa}`;
  }

}
