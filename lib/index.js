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
import {KollavarshamDate} from './date.js';

/**
 * The Kollavarsham class implements all the public APIs of the library.
 *
 * Create a new instance of this class, passing in the relevant options and call methods on this instance.
 *
 * @class Kollavarsham
 * @param {Object} [options] A set of key value pairs to configure the Kollavarsham instance. All settings are optional.
 *  @param {String} [options.system='SuryaSiddhanta'] Set to 'InPancasiddhantika' or 'SuryaSiddhanta' to use the corresponding system
 *  @param {Number} [options.latitude=23.2] Sets the latitude for the location for the conversions
 *  @param {Number} [options.longitude=75.8] Sets the longitude for the location for the conversions
 *  @param {String} [options.outputformat='verbose'] Set to 'list' or 'verbose' for the output
 * @constructor
 * @example
 * ```
 *var Kollavarsham = require('kollavarsham');
 *
 *var options = {
 *  system: 'SuryaSiddhanta',
 *  latitude: 10,
 *  longitude: 76.2,
 *  outputFormat: 'verbose'
 *};
 *
 *var kollavarsham = new Kollavarsham(options);
 *
 *var todayInMalayalamEra = kollavarsham.fromGregorianDate(new Date());
 *
 *var today = kollavarsham.toGregorianDate(todayInMalayalamEra);
 *```
 */
class Kollavarsham {

  constructor({system = 'SuryaSiddhanta', latitude = 23.2, longitude = 75.8, outputformat = 'verbose'} = {}) {
    /**
     * Holds the settings state of the Kollavarsham instance. To access a snapshot use the {{#crossLink "Kollavarsham/getSettings:method"}}{{/crossLink}} method
     * @property _settings
     * @type {Object}
     * @private
     */
    this.settings = {
      system,
      latitude,
      longitude,
      outputformat
    };
  }

  /**
   * Gets a snapshot of the current settings
   * @method getSettings
   * @returns {Object} The current snapshot of the settings/configuration
   */
  getSettings() {
    return this.settings;
  }

  /**
   * Sets the system to be either 'InPancasiddhantika' or 'SuryaSiddhanta'
   *
   * @method setSystem
   * @param system {String}
   * @example
   * ```
   *var Kollavarsham = require('Kollavarsham');
   *var kollavarsham = new Kolavarsham({});
   *kollavarsham.setSystem('InPancasiddhantika');
   *kollavarsham.setInputDate(new Date(2014, 2, 14));
   *kollavarsham.convert();
   * ```
   */
  setSystem(system) {
    this.settings.system = system;
  }

  /**
   * Sets the latitude for the location that will be used as the basis for the conversion
   * @method setLatitude
   * @param latitude
   * @example
   * ```
   *var Kollavarsham = require('Kollavarsham');
   *var kollavarsham = new Kolavarsham({});
   *kollavarsham.setLatitude(8.5);
   * ```
   */
  setLatitude(latitude) {
    this.settings.latitude = latitude;
  }

  /**
   * Sets the longitude for the location that will be used as the basis of the conversion
   * @method setLongitude
   * @param longitude
   * @example
   * ```
   *var Kollavarsham = require('Kollavarsham');
   *var kollavarsham = new Kolavarsham({});
   *kollavarsham.setLongitude(77.0);
   *```
   */
  setLongitude(longitude) {
    this.settings.longitude = longitude;
  }

  //TODO: This below function is more of a CLI concern
  /**
   * Sets the output to be as 'list' or 'verbose'
   * @method setOutput
   * @param output {String} Valid values are 'verbose' (default) and 'list'
   */
  setOutput(output) {
    this.settings.output = output;
  }

  /**
   * Converts a Gregorian date to the equivalent Kollavarsham date, respecting the current configuration
   *
   * @method fromGregorianDate
   * @param date {Date} The Gregorian date to be converted to Kollavarsham
   * @returns {KollavarshamDate} Converted date
   */
  fromGregorianDate(date) {
    const calculations = new Calculations(this.settings);
    return calculations.fromGregorian(this.settings, date);
  }

  /**
   * Converts a Kollavarsham date to its equivalent Gregorian date, respecting the current configuration.
   * This method Will return {{#crossLink "JulianDate"}}{{/crossLink}} object for any date before 1st January 1583 AD and
   * [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects for later dates.
   *
   *  **This API is still work in progress**
   *
   * @method toGregorianDate
   * @param date {KollavarshamDate} The Kollavarsham date to be converted to Gregorian
   * @returns {Date|JulianDate} Converted date
   */
  toGregorianDate(date) {
    //TODO: Implement this function
    throw new Error(util.format('When the API is implemented, will convert %s', date));
  }

  toGregorianDateFromSaka(hinduDate) {
    const calculations = new Calculations(this.settings);
    return calculations.toGregorianFromSaka(this.settings, hinduDate);
  }
}

/**
 * Exports the {{#crossLink "KollavarshamDate"}}{{/crossLink}} class for referencing via `require`. This is the class
 * that is returned when converting {{#crossLink "Kollavarsham/fromGregorianDate:method"}}{{/crossLink}} and is passed in
 * to {{#crossLink "Kollavarsham/toGregorianDate:method"}}{{/crossLink}}. See example below.
 * @property kollavarshamDate
 * @type {KollavarshamDate}
 * @static
 * @example
 * ```
 * var Kollavarsham = require('kollavarsham');
 * var KollavarshamDate = require('kollavarsham').kollavarshamDate;
 *
 * var myKollavarshamDate = new KollavarshamDate(1189, 7, 13); // Create a new Malayalam Date representation
 * var myDateInGregorian = (new Kollavarsham({'system': 'InPancasiddhantika'})).toGregorianDate(myKollavarshamDate);
 * ```
 */
Kollavarsham.kollavarshamDate = KollavarshamDate;

export default Kollavarsham;
