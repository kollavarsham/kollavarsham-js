/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2023 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module kollavarsham
 */
import { Calculations } from './calculations';
import { KollavarshamDate, SakaDate } from './dates/index';

export interface Settings {
  readonly system: string;
  readonly latitude: number;
  readonly longitude: number;
}

export const DefaultSettings: Settings = { system : 'SuryaSiddhanta', latitude : 23.2, longitude : 75.8 };

/**
 * The Kollavarsham class implements all the public APIs of the library.
 *
 * Create a new instance of this class, passing in the relevant options and call methods on the instance.
 *
 * @class Kollavarsham
 * @param {Object} [options] A set of key value pairs to configure the Kollavarsham instance. All settings are optional.
 *  @param {String} [options.system='SuryaSiddhanta'] Set to 'InPancasiddhantika' or 'SuryaSiddhanta' to use the corresponding system
 *  @param {Number} [options.latitude=23.2] Sets the latitude for the location for the conversions. Defaults to Ujjain, Madhya Pradesh
 *  @param {Number} [options.longitude=75.8] Sets the longitude for the location for the conversions. Default to Ujjain, Madhya Pradesh
 * @constructor
 * @example
 *const Kollavarsham = require('kollavarsham');
 *
 *const options = {
 *  system: 'SuryaSiddhanta',
 *  latitude: 10,
 *  longitude: 76.2
 *};
 *
 *const kollavarsham = new Kollavarsham(options);
 *
 *let todayInMalayalamEra = kollavarsham.fromGregorianDate(new Date());
 *
 *let today = kollavarsham.toGregorianDate(todayInMalayalamEra);  // Not implemented yet
 */
export class Kollavarsham {
  settings: Settings;

  constructor(options: Settings = DefaultSettings) {
    /**
     * Holds the settings state of the Kollavarsham instance. To access a snapshot use the {@link Kollavarsham#getSettings} method
     * @property settings
     * @type {{system, latitude, longitude}}
     */
    this.settings = {
      system    : options.system,
      latitude  : options.latitude,
      longitude : options.longitude
    };
  }

  /**
   * Converts a Gregorian date to the equivalent Kollavarsham date, respecting the current configuration
   *
   * @method fromGregorianDate
   * @for Kollavarsham
   * @param date {Date} The Gregorian date to be converted to Kollavarsham
   * @returns {kollavarshamDate} Converted date
   * @example
   *const Kollavarsham = require('Kollavarsham');
   *const kollavarsham = new Kollavarsham();
   *let today = kollavarsham.fromGregorianDate(new Date(1979, 4, 22));
   */
  fromGregorianDate(date: Date): KollavarshamDate {
    const calculations = new Calculations(this.settings);
    return calculations.fromGregorian(date);
  }

  /**
   * Converts a Kollavarsham date (an instance of {@link kollavarshamDate}) to its equivalent Gregorian date, respecting the current configuration.
   * This method Will return {@link JulianDate} object for any date before 1st January 1583 AD and
   * [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects for later dates.
   *
   *  **This API has not been implemented yet**
   *
   * @method toGregorianDate
   * @for Kollavarsham
   * @param date {kollavarshamDate} The Kollavarsham date to be converted to Gregorian
   * @returns {Date|JulianDate} Converted date
   * @throws **"When the API is implemented, will convert &lt;date&gt;"**
   */
  toGregorianDate(date: KollavarshamDate): Date {
    //TODO: Implement this method
    throw new Error(`When the API is implemented, will convert ${date}`);
  }

  /**
   * Converts a Saka date (an instance of {@link sakaDate}) to its equivalent Gregorian date, respecting the current configuration.
   * This method Will return {@link JulianDate} object for any date before 1st January 1583 AD and
   * [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects for later dates.
   *
   * @method toGregorianDateFromSaka
   * @for Kollavarsham
   * @param sakaDate {sakaDate} The Saka date to be converted to Gregorian
   * @returns {Date|JulianDate} Converted date
   */
  toGregorianDateFromSaka(sakaDate: SakaDate): KollavarshamDate {
    // TODO: Remove this method??
    // This is implemented specifically for the pancanga-nodejs cli (https://github.com/kollavarsham/pancanga-nodejs)
    // Could be removed when toGregorian has been implemented based on this

    if (!(sakaDate instanceof SakaDate)) {
      throw new Error('Parameter sakaDate should be an instance of the \'SakaDate\' class');
    }
    const calculations = new Calculations(this.settings);
    return calculations.toGregorianFromSaka(sakaDate);
  }
}

export * from './dates/index';
