import {expect} from 'chai';

import { MathHelper } from '../../lib/mathHelper';

describe('MathHelper', function () {

  describe('isNumber', function () {

    it('should return correct results', function () {

      expect(MathHelper.isNumber(0)).to.equal(true);
      expect(MathHelper.isNumber(0.1)).to.equal(true);
      expect(MathHelper.isNumber(-0.1)).to.equal(true);
      expect(MathHelper.isNumber('-0.1')).to.equal(true);
      expect(MathHelper.isNumber('23')).to.equal(true);
      expect(MathHelper.isNumber(23.235927349)).to.equal(true);
      expect(MathHelper.isNumber('abchd')).to.equal(false);
      expect(MathHelper.isNumber('A quick brown fox')).to.equal(false);

    });

  });

  describe('isInt', function () {

    it('should return correct results', function () {

      expect(MathHelper.isInt(0)).to.equal(true);
      expect(MathHelper.isInt(0.1)).to.equal(false);
      expect(MathHelper.isInt(-0.1)).to.equal(false);
      expect(MathHelper.isInt('-42')).to.equal(true);
      expect(MathHelper.isInt('23')).to.equal(true);
      expect(MathHelper.isInt(23.235927349)).to.equal(false);
      expect(MathHelper.isInt('abchd')).to.equal(false);
      expect(MathHelper.isInt('A quick brown fox')).to.equal(false);

    });

  });

  describe('truncateDecimals', function () {

    it('should return correct results', function () {

      expect(MathHelper.truncateDecimals(0, 0)).to.equal(0);
      expect(MathHelper.truncateDecimals(0, 2)).to.equal(0);
      expect(MathHelper.truncateDecimals(0.2345, 2)).to.equal(0.23);
      expect(MathHelper.truncateDecimals(0.2385, 2)).to.equal(0.23);
      expect(MathHelper.truncateDecimals(0.23999, 2)).to.equal(0.23);
      expect(MathHelper.truncateDecimals(-456.23999, 2)).to.equal(-456.23);
      expect(MathHelper.truncateDecimals(456.999, 0)).to.equal(456);
      expect(MathHelper.truncateDecimals('456.999', 0)).to.equal(456);

    });

  });

  describe('truncate', function () {

    it('should return correct results', function () {

      expect(MathHelper.truncate(0.2345)).to.equal(0);
      expect(MathHelper.truncate(0.2385)).to.equal(0);
      expect(MathHelper.truncate(0.23999)).to.equal(0);
      expect(MathHelper.truncate(-456.23999)).to.equal(-456);
      expect(MathHelper.truncate(456.999)).to.equal(456);
      expect(MathHelper.truncate('456.999')).to.equal(456);
      expect(MathHelper.truncate('A quick brown fox')).to.equal(0);
      expect(MathHelper.truncate('-123456.350')).to.equal(-123456);
      expect(MathHelper.truncate('-123456')).to.equal(-123456);

    });

  });

  describe('floor', function () {

    it('should return correct results', function () {

      expect(MathHelper.floor(0.2345)).to.equal(0);
      expect(MathHelper.floor(-0.2385)).to.equal(-1);
      expect(MathHelper.floor(0.23999)).to.equal(0);
      expect(MathHelper.floor(-456.23999)).to.equal(-457);
      expect(MathHelper.floor(456.999)).to.equal(456);
      expect(MathHelper.floor('456.999')).to.equal(456);
      expect(MathHelper.floor('A quick brown fox')).to.equal(0);
      expect(MathHelper.floor('-123456.350')).to.equal(-123457);
      expect(MathHelper.floor(42.999)).to.equal(42);
      expect(MathHelper.floor(42.00001)).to.equal(42);

    });

  });

  describe('fractional', function () {

    it('should return correct results', function () {

      expect(MathHelper.fractional(0.2345)).to.be.closeTo(0.2345, MathHelper.epsilon);
      expect(MathHelper.fractional(-0.2385)).to.be.closeTo(-0.2385, MathHelper.epsilon);
      expect(MathHelper.fractional(0.23999)).to.be.closeTo(0.23999, MathHelper.epsilon);
      expect(MathHelper.fractional(-456.23999)).to.be.closeTo(-0.23999, MathHelper.epsilon);
      expect(MathHelper.fractional(456.999)).to.be.closeTo(0.999, MathHelper.epsilon);
      expect(MathHelper.fractional('456.999')).to.be.closeTo(0.999, MathHelper.epsilon);
      expect(MathHelper.fractional('A quick brown fox')).to.be.closeTo(0, MathHelper.epsilon);
      expect(MathHelper.fractional('-123456.350')).to.be.closeTo(-0.350, MathHelper.epsilon);
      expect(MathHelper.fractional(42.999)).to.be.closeTo(0.999, MathHelper.epsilon);
      expect(MathHelper.fractional(42.00001)).to.be.closeTo(0.00001, MathHelper.epsilon);

    });

  });

  describe('round', function () {

    it('should return correct results', function () {

      expect(MathHelper.round(0.2345)).to.equal(0);
      expect(MathHelper.round(-0.2385)).to.equal(0);
      expect(MathHelper.round(0.23999)).to.equal(0);
      expect(MathHelper.round(-456.23999)).to.equal(-456);
      expect(MathHelper.round(456.999)).to.equal(457);
      expect(MathHelper.round('456.999')).to.equal(457);
      expect(MathHelper.round('A quick brown fox')).to.equal(0);
      expect(MathHelper.round('-123456.350')).to.equal(-123456);
      expect(MathHelper.round(42.999)).to.equal(43);
      expect(MathHelper.round(-42.999)).to.equal(-43);
      expect(MathHelper.round(42.00001)).to.equal(42);

    });

  });

  describe('square', function () {

    it('should return correct results', function () {

      expect(MathHelper.square(0.2345)).to.be.closeTo(0.05499025, MathHelper.epsilon);
      expect(MathHelper.square(-0.2385)).to.be.closeTo(0.05688225, MathHelper.epsilon);
      expect(MathHelper.square(0.23999)).to.be.closeTo(0.0575952001, MathHelper.epsilon);
      expect(MathHelper.square(-456.23999)).to.be.closeTo(208154.9284752001, MathHelper.epsilon);
      expect(MathHelper.square(456.999)).to.be.closeTo(208848.086001, MathHelper.epsilon);
      expect(MathHelper.square('456.999')).to.be.closeTo(208848.086001, MathHelper.epsilon);
      expect(MathHelper.square('A quick brown fox')).to.be.closeTo(0, MathHelper.epsilon);
      expect(MathHelper.square(42.999)).to.be.closeTo(1848.914001, MathHelper.epsilon);
      expect(MathHelper.square(42.00001)).to.be.closeTo(1764.0008400001, MathHelper.epsilon);
      expect(MathHelper.square(5)).to.be.closeTo(25, MathHelper.epsilon);
      expect(MathHelper.square(9)).to.be.closeTo(81, MathHelper.epsilon);

    });

  });

  describe('zero360', function () {

    it('should return correct results', function () {

      expect(MathHelper.zero360(75.2)).to.equal(75.2);
      expect(MathHelper.zero360(-75.2)).to.equal(284.8);
      expect(MathHelper.zero360(370)).to.equal(10);
      expect(MathHelper.zero360(0)).to.equal(0);
      expect(MathHelper.zero360(0.234)).to.equal(0.234);

    });

  });

});
