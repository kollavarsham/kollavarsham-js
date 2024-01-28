/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2024 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module julianDate
 */
import { BaseDate } from './baseDate';

/**
 * Represents a Julian date's year, month and day
 * `toGregorianDateFromSaka` method of the {@link Kollavarsham} class returns an instance of this type for dates
 * older than `1st January 1583 AD`
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
export class JulianDate extends BaseDate {

  constructor(year = 1, month = 1, day = 1) {
    super(year, month, day);
  }

}
