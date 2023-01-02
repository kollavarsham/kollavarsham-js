/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2023 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module mathHelper
 */
const _epsilon = 1e-8; // eslint-disable-line no-underscore-dangle
const _radianInDegrees = 180 / Math.PI; // eslint-disable-line no-underscore-dangle

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class MathHelper
 */
export class MathHelper {

  static get epsilon(): number {
    return _epsilon;
  }

  static get radianInDegrees(): number {
    return _radianInDegrees;
  }

  static isNumber(n: (number | string)): boolean {
    return !isNaN(parseFloat(n as string)) && isFinite(n as number);
  }

  static isInt(n: (number | string)): boolean {
    return MathHelper.isNumber(n) && n as number % 1 === 0;
  }

  static truncateDecimals(num: number | string, digits: number): number {
    // Thanks Nick Knowlson! - http://stackoverflow.com/a/9232092/218882
    //     (The original from that answer has a bug though, where an integer was getting rounded to "".
    //      Caught it while getting calendar.gregorianDateToJulianDay to work. 2 hours... Phew!)
    const numS = num.toString();
    const decPos = numS.indexOf('.');
    const result = decPos === -1 ? num.toString() : numS.substr(0, 1 + decPos + digits);
    const resultAsNumber = parseFloat(result as string);
    return isNaN(resultAsNumber) ? 0 : resultAsNumber;
  }

  static truncate(n: number | string): number {
    return MathHelper.truncateDecimals(n, 0);
  }

  static floor(n: number | string): number {
    const result = Math.floor(n as number);
    return isNaN(result) ? 0 : result;
  }

  static fractional(n: number | string): number {
    const result = n as number % 1;
    return isNaN(result) ? 0 : result;
  }

  static round(n: (number | string)): number {
    return MathHelper.isNumber(n) ? MathHelper.floor(parseFloat(n as string) + 0.5) : 0;
  }

  static square(n: (number | string)): number {
    return MathHelper.isNumber(n) ? Math.pow(parseFloat(n as string), 2) : 0;
  }

  static zero360(angleInDegrees: number): number {
    const result = angleInDegrees - MathHelper.truncate(angleInDegrees / 360) * 360;
    return result < 0 ? 360 + result : result;
  }

}
