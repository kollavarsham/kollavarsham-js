import {expect} from 'chai';

import KollavarshamDate from '../../../lib/dates/kollavarshamDate.js';

describe('KollavarshamDate', function () {

  let date;

  beforeEach(function () {
    date = new KollavarshamDate();
  });

  describe('empty constructor', function () {
    it('should set up the date correctly', function () {
      expect(date.date).to.equal(1);
      expect(date.month).to.equal(1);
      expect(date.year).to.equal(1);
    });
  });

  describe('toString', function () {
    it('should return the correct value', function () {
      expect(date.toString()).to.equal('0001 01 01');
    });
  });

  describe('naksatra', function () {
    beforeEach(function () {
      date = new KollavarshamDate();
      date.naksatra = {saka : 'U-asadha', enMalayalam : 'Uthradam', mlMalayalam : 'ഉത്രാടം'};
    });

    it('should have valid values for naksatra correctly', function () {
      expect(date.naksatraName).to.equal('Uthradam');
      expect(date.mlNaksatraName).to.equal('ഉത്രാടം');
    });
  });

  describe('naksatra as null', function () {
    beforeEach(function () {
      date = new KollavarshamDate();
    });

    it('should have valid values for naksatra correctly', function () {
      expect(date.naksatraName).to.be.undefined;
      expect(date.mlNaksatraName).to.be.undefined;
    });
  });

});


