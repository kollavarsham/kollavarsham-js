/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2024 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module kollavarshamDate
 */
import { BaseDate } from './baseDate';
import { SakaDate } from './sakaDate';

/**
 * Represents a Kollavarsham date's year, month and date
 * @class KollavarshamDate
 * @constructor
 * @param [year=1] {Number} The Kollavarsham year
 * @param [month=1] {Number} The Kollavarsham month
 * @param [day=1] {Number} The Kollavarsham day
 * @extends BaseDate
 */
export class KollavarshamDate extends BaseDate {
  sakaDate: SakaDate;

  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);

    this.sakaDate = new SakaDate(year, month);
  }

  /**
   * Returns the Kollavarsham Naksatra name (in English) for this instance date
   *
   * @property naksatraName
   * @type {string}
   */
  get naksatraName(): string {
    return this.naksatra.enMalayalam;
  }

  /**
   * Returns the Kollavarsham Naksatra name (in Malayalam) for this instance of date
   *
   * @property mlNaksatraName
   * @type {string}
   */
  get mlNaksatraName(): string {
    return this.naksatra.mlMalayalam;
  }

  /**
   * Returns the Kollavarsham month name (in English) for this instance of date
   *
   * @property masaName
   * @type {string}
   */
  get masaName(): string {
    return KollavarshamDate.getMasaName(this.month - 1).enMalayalam;
  }

  /**
   * Returns the Kollavarsham month name (in Malayalam) for this instance of date
   *
   * @property mlMasaName
   * @type {string}
   */
  get mlMasaName(): string {
    return KollavarshamDate.getMasaName(this.month - 1).mlMalayalam;
  }

}
