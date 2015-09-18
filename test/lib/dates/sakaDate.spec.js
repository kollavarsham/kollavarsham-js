import {expect} from 'chai';

import SakaDate from '../../../lib/dates/sakaDate.js';

describe('SakaDate', function () {

  let sakaDate;

  beforeEach(function () {
    sakaDate = new SakaDate(1905, 5, 10, 'Krsnapaksa'); // Not perhaps a valid Julian Date
  });

  describe('constructor', function () {
    it('should set up the date correctly', function () {
      expect(sakaDate.year).to.equal(1905);
      expect(sakaDate.sakaYear).to.equal(1905);
      expect(sakaDate.month).to.equal(5);
      expect(sakaDate.tithi).to.equal(10);
      expect(sakaDate.paksa).to.equal('Krsnapaksa');
      expect(sakaDate.vikramaYear).to.equal(2040);
    });
  });

  describe('toString', function () {
    it('should return the correct value', function () {
      expect(sakaDate.toString()).to.equal('1905 05 10 Krsnapaksa');
      expect(new SakaDate(101, 1, 1).toString()).to.equal('0101 01 01 Suklapaksa');
    });
  });

  describe('empty constructor', function () {
    beforeEach(function () {
      sakaDate = new SakaDate();
    });

    it('should set up the date correctly', function () {
      expect(sakaDate.year).to.equal(1);
      expect(sakaDate.sakaYear).to.equal(1);
      expect(sakaDate.month).to.equal(1);
      expect(sakaDate.tithi).to.equal(1);
      expect(sakaDate.paksa).to.equal('Suklapaksa');
      expect(sakaDate.vikramaYear).to.equal(136);
      expect(sakaDate.toString()).to.equal('0001 01 01 Suklapaksa');
    });
  });

  describe('naksatra', function () {
    beforeEach(function () {
      sakaDate = new SakaDate();
      sakaDate.naksatra = {saka : 'U-asadha', enMalayalam : 'Uthradam', mlMalayalam : 'ഉത്രാടം'};
    });

    it('should have valid values for naksatra correctly', function () {
      expect(sakaDate.naksatraName).to.equal('U-asadha');
    });
  });

  describe('naksatra as null', function () {
    beforeEach(function () {
      sakaDate = new SakaDate();
    });

    it('should have valid values for naksatra correctly', function () {
      expect(sakaDate.naksatraName).to.be.undefined;
    });
  });

});
