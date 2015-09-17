import {expect} from 'chai';

import KollavarshamDate from '../../../lib/dates/kollavarshamDate.js';

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

    });

  });

  describe('toString', function () {

    it('should return the correct value', function () {

      expect(date.toString()).to.equal('0001 01 01');

    });

  });


});


