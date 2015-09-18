import {expect} from 'chai';

import BaseDate from '../../../lib/dates/baseDate.js';

describe('BaseDate', function () {

  let baseDate;

  beforeEach(function () {
    baseDate = new BaseDate(2013, 12, 31);
  });

  describe('constructor', function () {
    it('should set up the date correctly', function () {
      expect(baseDate.year).to.equal(2013);
      expect(baseDate.month).to.equal(12);
      expect(baseDate.date).to.equal(31);
    });
  });

  describe('toString', function () {
    it('should return the correct value', function () {
      expect(baseDate.toString()).to.equal('2013 12 31');
      expect(new BaseDate(1, 1, 1).toString()).to.equal('0001 01 01');
    });
  });

  describe('empty constructor', function () {
    beforeEach(function () {
      baseDate = new BaseDate();
    });

    it('should set up the date correctly', function () {
      expect(baseDate.year).to.equal(0);
      expect(baseDate.month).to.equal(0);
      expect(baseDate.date).to.equal(0);
      expect(baseDate.toString()).to.equal('0000 00 00');
    });
  });

  describe('naksatra as null', function () {
    beforeEach(function () {
      baseDate = new BaseDate();
    });

    it('should have valid values for naksatra correctly', function () {
      expect(baseDate.naksatra).to.eql({});
    });
  });

});
