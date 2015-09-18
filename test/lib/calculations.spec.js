import {expect} from 'chai';

import Kollavarsham from '../../lib/index.js';
import Calculations from '../../lib/calculations.js';
import SakaDate from '../../lib/dates/sakaDate.js';

describe('Calculations', function () {

  let settings;
  let calculations;
  let date;
  let sakaDate;

  beforeEach(function () {
    settings = (new Kollavarsham()).getSettings();
    calculations = new Calculations();
  });

  describe('toGregorian', function () {
    it('should throw appropriate exception', function () {
      expect(function () {
        calculations.toGregorian({});
      }).to.throw('Not implemented');
    });
  });

  describe('fromGregorianToSaka 01', function () {
    beforeEach(function () {
      date = new Date(1979, 4, 22);
      sakaDate = calculations.fromGregorianToSaka(settings, date);
    });

    it('should return a valid malayalam date', function () {
      expect(sakaDate instanceof SakaDate).to.be.true;
      expect(sakaDate.year).to.equal(1901);
      expect(sakaDate.month).to.equal(1);
      expect(sakaDate.tithi).to.equal(11);
      expect(sakaDate.paksa).to.equal('Krsnapaksa');
      expect(sakaDate.kaliYear).to.equal(5080);
      expect(sakaDate.vikramaYear).to.equal(2036);
      expect(sakaDate.calendarData.masaNum).to.equal(1);
      expect(sakaDate.calendarData.tithiDay).to.equal(11);
      expect(sakaDate.calendarData.ftithi).to.equal(0.7870052988803486);
      expect(sakaDate.calendarData.sunriseTime.hour).to.equal(5);
      expect(sakaDate.calendarData.sunriseTime.minute).to.equal(23);
      expect(sakaDate.calendarData.adhimasa).to.equal('');
      expect(sakaDate.calendarData.masa).to.equal('Vaisakha  ');
      expect(sakaDate.naksatraName).to.equal('U-bhadrapada');
      expect(sakaDate.julianDay).to.equal(2444016);
      expect(sakaDate.ahargana).to.equal(1855550);
    });
  });

  describe('fromGregorianToSaka 02', function () {
    beforeEach(function () {
      date = new Date(1983, 8, 7);
      sakaDate = calculations.fromGregorianToSaka(settings, date);
    });

    it('should return a valid malayalam date', function () {
      expect(sakaDate instanceof SakaDate).to.be.true;
      expect(sakaDate.year).to.equal(1905);
      expect(sakaDate.month).to.equal(4);
      expect(sakaDate.tithi).to.equal(15);
      expect(sakaDate.paksa).to.equal('Krsnapaksa');
      expect(sakaDate.kaliYear).to.equal(5084);
      expect(sakaDate.vikramaYear).to.equal(2040);
      expect(sakaDate.calendarData.masaNum).to.equal(4);
      expect(sakaDate.calendarData.tithiDay).to.equal(15);
      expect(sakaDate.calendarData.ftithi).to.equal(0.8896846200537567);
      expect(sakaDate.calendarData.sunriseTime.hour).to.equal(5);
      expect(sakaDate.calendarData.sunriseTime.minute).to.equal(48);
      expect(sakaDate.calendarData.adhimasa).to.equal('');
      expect(sakaDate.calendarData.masa).to.equal('Sravana   ');
      expect(sakaDate.naksatraName).to.equal('P-phalguni');
      expect(sakaDate.julianDay).to.equal(2445585);
      expect(sakaDate.ahargana).to.equal(1857119);
    });
  });

  describe('fromGregorianToSaka 03', function () {
    beforeEach(function () {
      date = new Date(1983, 8, 21);
      sakaDate = calculations.fromGregorianToSaka(settings, date);
    });

    it('should return a valid malayalam date', function () {
      expect(sakaDate instanceof SakaDate).to.be.true;
      expect(sakaDate.year).to.equal(1905);
      expect(sakaDate.month).to.equal(5);
      expect(sakaDate.tithi).to.equal(14);
      expect(sakaDate.paksa).to.equal('Suklapaksa');
      expect(sakaDate.kaliYear).to.equal(5084);
      expect(sakaDate.vikramaYear).to.equal(2040);
      expect(sakaDate.calendarData.masaNum).to.equal(5);
      expect(sakaDate.calendarData.tithiDay).to.equal(14);
      expect(sakaDate.calendarData.ftithi).to.equal(0.9732245662921084);
      expect(sakaDate.calendarData.sunriseTime.hour).to.equal(5);
      expect(sakaDate.calendarData.sunriseTime.minute).to.equal(58);
      expect(sakaDate.calendarData.adhimasa).to.equal('');
      expect(sakaDate.calendarData.masa).to.equal('Bhadrapada');
      expect(sakaDate.naksatraName).to.equal('P-bhadrapada');
      expect(sakaDate.julianDay).to.equal(2445599);
      expect(sakaDate.ahargana).to.equal(1857133);
    });
  });

});
