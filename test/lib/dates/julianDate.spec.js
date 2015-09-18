import {expect} from 'chai';

import JulianDate from '../../../lib/dates/julianDate.js';

describe('JulianDate', function () {

  let julianDate;

  beforeEach(function () {
    julianDate = new JulianDate(2013, 12, 31); // Not perhaps a valid Julian Date
  });

  describe('constructor', function () {
    it('should set up the date correctly', function () {
      expect(julianDate.year).to.equal(2013);
      expect(julianDate.month).to.equal(12);
      expect(julianDate.date).to.equal(31);
    });

  });

  describe('toString', function () {
    it('should return the correct value', function () {
      expect(julianDate.toString()).to.equal('2013 12 31');
      expect(new JulianDate(1, 1, 1).toString()).to.equal('0001 01 01');
    });
  });

  describe('empty constructor', function () {
    beforeEach(function () {
      julianDate = new JulianDate();
    });

    it('should set up the date correctly', function () {
      expect(julianDate.year).to.equal(1);
      expect(julianDate.month).to.equal(1);
      expect(julianDate.date).to.equal(1);
      expect(julianDate.toString()).to.equal('0001 01 01');
    });
  });

  describe('naksatra as null', function () {
    beforeEach(function () {
      julianDate = new JulianDate();
    });

    it('should have valid values for naksatra correctly', function () {
      expect(julianDate.naksatraName).to.be.undefined;
    });
  });

});
