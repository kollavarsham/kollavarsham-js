/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

const math = {
  epsilon         : 1e-8,
  radianInDegrees : 180 / Math.PI,
  floatingPointEqual(n1, n2, isTest) {
    const areEqual = Math.abs(n1 - n2) < math.epsilon;
    if (isTest === undefined) {
      isTest = true;
    }
    if (!areEqual && isTest) {
      console.log('\nDEBUG: math.floatingPointEqual failed for %d and %d', n1, n2); // eslint-disable-line no-console
    }
    return areEqual;
  },
  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },
  isInt(n) {
    return this.isNumber(n) && n % 1 === 0;
  },
  truncateDecimals(num, digits) {
    // Thanks Nick Knowlson! - http://stackoverflow.com/a/9232092/218882
    //     (The original from that answer has a bug though, where an integer was getting rounded to "".
    //      Caught it while getting calendar.gregorianDateToJulianDay to work. 2 hours... Phew!)
    const numS = num.toString();
    const decPos = numS.indexOf('.');
    const result = decPos === -1 ? num : numS.substr(0, 1 + decPos + digits);
    const resultAsNumber = parseFloat(result);
    return isNaN(resultAsNumber) ? 0 : resultAsNumber;
  },
  truncate(n) {
    return this.truncateDecimals(n, 0);
  },
  floor(n) {
    const result = Math.floor(n);
    return isNaN(result) ? 0 : result;
  },
  fractional(n) {
    const result = n % 1;
    return isNaN(result) ? 0 : result;
  },
  round(n) {
    return this.isNumber(n) ? this.floor(parseFloat(n) + 0.5) : 0;
  },
  square(n) {
    return this.isNumber(n) ? Math.pow(parseFloat(n), 2) : 0;
  },
  zero360(angleInDegrees) {
    const result = angleInDegrees - math.truncate(angleInDegrees / 360) * 360;
    return result < 0 ? 360 + result : result;
  }
};

export default math;
