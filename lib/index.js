/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * The main module that exposes all of the public API in the library
 * @module kollavarsham
 */
import util from 'util';

import Calculations from './calculations.js';
import KollavarshamDate from './dates/kollavarshamDate.js';
import SakaDate from './dates/sakaDate.js';

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
 * ```
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
 *```
 */
class Kollavarsham {

  constructor({system = 'SuryaSiddhanta', latitude = 23.2, longitude = 75.8} = {}) {
    /**
     * Holds the settings state of the Kollavarsham instance. To access a snapshot use the {{#crossLink "Kollavarsham/getSettings:method"}}{{/crossLink}} method
     * @property settings
     * @type {{system, latitude, longitude}}
     */
    this.settings = {
      system,
      latitude,
      longitude
    };
  }

  /**
   * Gets a snapshot of the current settings
   * @method getSettings
   * @for Kollavarsham
   * @returns {{system, latitude, longitude}}
   * @example
   * ```
   *const Kollavarsham = require('kollavarsham');
   *
   *const options = {
   *  system: 'InPancasiddhantika',
   *  latitude: 10,
   *  longitude: 76.2
   *};
   *
   *const kollavarsham = new Kollavarsham(options);
   *
   *let currentSettings = kollavarsham.getSettings();
   *```
   */
  getSettings() {
    return this.settings;
  }

  /**
   * Sets the system to be either 'InPancasiddhantika' or 'SuryaSiddhanta'
   *
   * @method setSystem
   * @for Kollavarsham
   * @param system {String}
   * @example
   * ```
   *const Kollavarsham = require('Kollavarsham');
   *const kollavarsham = new Kollavarsham();
   *kollavarsham.setSystem('InPancasiddhantika');
   *kollavarsham.setInputDate(new Date(2014, 2, 14));
   *kollavarsham.convert();
   * ```
   */
  setSystem(system) {
    this.settings.system = system;
  }

  /**
   * Sets the latitude for the location that will be used as the basis for the conversion.
   * The value of the latitude parameter should be within -90 to +90
   * @method setLatitude
   * @for Kollavarsham
   * @param latitude {Number}
   * @example
   * ```
   *const Kollavarsham = require('Kollavarsham');
   *const kollavarsham = new Kollavarsham();
   *kollavarsham.setLatitude(8.5);
   * ```
   */
  setLatitude(latitude) {
    this.settings.latitude = latitude;
  }

  /**
   * Sets the longitude for the location that will be used as the basis of the conversion
   * The value of the latitude parameter should be within -180 to +180
   * @method setLongitude
   * @for Kollavarsham
   * @param longitude {Number}
   * @example
   * ```
   *const Kollavarsham = require('Kollavarsham');
   *const kollavarsham = new Kollavarsham();
   *kollavarsham.setLongitude(77.0);
   *```
   */
  setLongitude(longitude) {
    this.settings.longitude = longitude;
  }

  /**
   * Converts a Gregorian date to the equivalent Kollavarsham date, respecting the current configuration
   *
   * @method fromGregorianDate
   * @for Kollavarsham
   * @param date {Date} The Gregorian date to be converted to Kollavarsham
   * @returns {KollavarshamDate} Converted date
   * @example
   * ```
   *const Kollavarsham = require('Kollavarsham');
   *const kollavarsham = new Kollavarsham();
   *let today = kollavarsham.fromGregorianDate(new Date(1979, 4, 22));
   *```
   */
  fromGregorianDate(date) {
    const calculations = new Calculations(this.settings);
    return calculations.fromGregorian(this.settings, date);
  }

  /**
   * Converts a Kollavarsham date (an instance of {{#crosslink "KollavarshamDate"}}{{/crossLink}}) to its equivalent Gregorian date, respecting the current configuration.
   * This method Will return {{#crossLink "JulianDate"}}{{/crossLink}} object for any date before 1st January 1583 AD and
   * [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects for later dates.
   *
   *  **This API has not been implemented yet**
   *
   * @method toGregorianDate
   * @for Kollavarsham
   * @param date {KollavarshamDate} The Kollavarsham date to be converted to Gregorian
   * @returns {Date|JulianDate} Converted date
   * @throws {Error} When the API is implemented, will convert <date>
   */
  toGregorianDate(date) {
    //TODO: Implement this function
    throw new Error(util.format('When the API is implemented, will convert %s', date));
  }

  /**
   * Converts a Saka date (an instance of {{#crosslink "SakaDate"}}{{/crossLink}}) to its equivalent Gregorian date, respecting the current configuration.
   * This method Will return {{#crossLink "JulianDate"}}{{/crossLink}} object for any date before 1st January 1583 AD and
   * [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects for later dates.
   *
   * @method toGregorianDateFromSaka
   * @for Kollavarsham
   * @param sakaDate {SakaDate} The Saka date to be converted to Gregorian
   * @returns {Date|JulianDate} Converted date
   */
  toGregorianDateFromSaka(sakaDate) {
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

/**
 * Exports the {{#crossLink "KollavarshamDate"}}{{/crossLink}} class for referencing via `require`. This is the class
 * that is returned when converting {{#crossLink "Kollavarsham/fromGregorianDate:method"}}{{/crossLink}} and is passed in
 * to {{#crossLink "Kollavarsham/toGregorianDate:method"}}{{/crossLink}}. See example below.
 * @property KollavarshamDate
 * @type {KollavarshamDate}
 * @static
 * @example
 * ```
 * const Kollavarsham = require('kollavarsham');
 * const KollavarshamDate = Kollavarsham.KollavarshamDate;
 *
 * let myKollavarshamDate = new KollavarshamDate(1189, 7, 13); // Create a new Malayalam Date representation
 * let myDateInGregorian = (new Kollavarsham({'system': 'InPancasiddhantika'})).toGregorianDate(myKollavarshamDate);
 * ```
 */
Kollavarsham.KollavarshamDate = KollavarshamDate;

/**
 * Exports the {{#crossLink "SakaDate"}}{{/crossLink}} class for referencing via `require`. This class's instance needs to be passed in
 * to {{#crossLink "Kollavarsham/toGregorianDateFromSaka:method"}}{{/crossLink}}. See example below.
 * @property SakaDate
 * @type {SakaDate}
 * @static
 * @example
 * ```
 * const Kollavarsham = require('kollavarsham');
 * const SakaDate = Kollavarsham.SakaDate;
 *
 * let sakaDate = new SakaDate(1905, 5, 14, 'Suklapaksa'); // Create a new Saka Date representation
 * let sakaDateInGregorian = (new Kollavarsham()).toGregorianDateFromSaka(sakaDate);
 * ```
 */
Kollavarsham.SakaDate = SakaDate;

export default Kollavarsham;
