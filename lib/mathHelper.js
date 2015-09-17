/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

const _epsilon = 1e-8; // eslint-disable-line no-underscore-dangle
const _radianInDegrees = 180 / Math.PI; // eslint-disable-line no-underscore-dangle

class MathHelper {

  static get epsilon() {
    return _epsilon;
  }

  static get radianInDegrees() {
    return _radianInDegrees;
  }
  static floatingPointEqual(n1, n2, isTest) {
    const areEqual = Math.abs(n1 - n2) < MathHelper.epsilon;
    if (isTest === undefined) {
      isTest = true;
    }
    if (!areEqual && isTest) {
      console.log('\nDEBUG: MathHelper.floatingPointEqual failed for %d and %d', n1, n2); // eslint-disable-line no-console
    }
    return areEqual;
  }

  static isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static isInt(n) {
    return MathHelper.isNumber(n) && n % 1 === 0;
  }

  static truncateDecimals(num, digits) {
    // Thanks Nick Knowlson! - http://stackoverflow.com/a/9232092/218882
    //     (The original from that answer has a bug though, where an integer was getting rounded to "".
    //      Caught it while getting calendar.gregorianDateToJulianDay to work. 2 hours... Phew!)
    const numS = num.toString();
    const decPos = numS.indexOf('.');
    const result = decPos === -1 ? num : numS.substr(0, 1 + decPos + digits);
    const resultAsNumber = parseFloat(result);
    return isNaN(resultAsNumber) ? 0 : resultAsNumber;
  }

  static truncate(n) {
    return MathHelper.truncateDecimals(n, 0);
  }

  static floor(n) {
    const result = Math.floor(n);
    return isNaN(result) ? 0 : result;
  }

  static fractional(n) {
    const result = n % 1;
    return isNaN(result) ? 0 : result;
  }

  static round(n) {
    return MathHelper.isNumber(n) ? MathHelper.floor(parseFloat(n) + 0.5) : 0;
  }

  static square(n) {
    return MathHelper.isNumber(n) ? Math.pow(parseFloat(n), 2) : 0;
  }

  static zero360(angleInDegrees) {
    const result = angleInDegrees - MathHelper.truncate(angleInDegrees / 360) * 360;
    return result < 0 ? 360 + result : result;
  }

}

export default MathHelper;
