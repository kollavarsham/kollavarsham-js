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
      expect(sakaDate.month).to.equal(5);
      expect(sakaDate.tithi).to.equal(10);
      expect(sakaDate.paksa).to.equal('Krsnapaksa');

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
      expect(sakaDate.month).to.equal(1);
      expect(sakaDate.tithi).to.equal(1);
      expect(sakaDate.paksa).to.equal('Suklapaksa');
      expect(sakaDate.toString()).to.equal('0001 01 01 Suklapaksa');

    });

  });

});
