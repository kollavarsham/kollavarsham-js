import {expect} from 'chai';

import {JulianDate, KollavarshamDate} from '../../lib/date.js';

describe('date', function () {

  describe('JulianDate', function () {

    let julianDate;

    beforeEach(function () {

      julianDate = new JulianDate(2013, 12, 31); // Not perhaps a valid Julian Date

    });

    describe('constructor', function () {

      it('should set up the date correctly', function () {

        expect(julianDate.year).to.equal(2013);
        expect(julianDate.month).to.equal(12);
        expect(julianDate.day).to.equal(31);

      });

    });

    describe('toString', function () {

      it('should return the correct value', function () {

        expect(julianDate.toString()).to.equal('2013 12 31');
        expect(new JulianDate(1, 1, 1).toString()).to.equal('0001 01 01');

      });

    });

  });

  describe('KollavarshamDate', function () {

    let date;

    beforeEach(function () {
      date = new KollavarshamDate();
    });

    describe('empty constructor', function () {

      it('should set up the date correctly', function () {

        expect(date.day).to.equal(1);
        expect(date.month).to.equal(1);
        expect(date.year).to.equal(1);
        expect(date.toString()).to.equal('0001 01 01');

      });

    });


  });

});

