import {expect} from 'chai';

import { DefaultSettings, Kollavarsham } from '../../lib';
import { JulianDate } from '../../lib/dates/julianDate';
import { SakaDate } from '../../lib/dates/sakaDate';
import { KollavarshamDate } from '../../lib/dates/kollavarshamDate';

describe('Kollavarsham', function () {

  let kollavarsham;
  let date;
  let malayalamDate;
  let settings;
  let hinduDate;

  it('should be defined', function () {
    // eslint-disable-next-line no-unused-expressions
    expect(Kollavarsham).to.exist;
  });

  describe('fromGregorianDate 01', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      date = new Date(1979, 4, 22);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1154);
      expect(malayalamDate.month).to.equal(10);
      expect(malayalamDate.date).to.equal(8);
      expect(malayalamDate.sauraMasaName).to.equal('Vrsa      ');
      expect(malayalamDate.masaName).to.equal('Idavam    ');
      expect(malayalamDate.mlMasaName).to.equal('ഇടവം');
      expect(malayalamDate.naksatraName).to.equal('Uthrattathi');
      expect(malayalamDate.mlNaksatraName).to.equal('ഉത്രട്ടാതി');
      expect(malayalamDate.julianDay).to.equal(2444016);
      expect(malayalamDate.weekdayName).to.equal('Tuesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ചൊവ്വ');
      expect(malayalamDate.ahargana).to.equal(1855550);
    });
  });

  describe('fromGregorianDate 02', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      date = new Date(1983, 8, 7);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1159);
      expect(malayalamDate.month).to.equal(1);
      expect(malayalamDate.date).to.equal(22);
      expect(malayalamDate.sauraMasaName).to.equal('Simha     ');
      expect(malayalamDate.masaName).to.equal('Chingam   ');
      expect(malayalamDate.mlMasaName).to.equal('ചിങ്ങം');
      expect(malayalamDate.naksatraName).to.equal('Pooram');
      expect(malayalamDate.mlNaksatraName).to.equal('പൂരം');
      expect(malayalamDate.julianDay).to.equal(2445585);
      expect(malayalamDate.weekdayName).to.equal('Wednesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ബുധൻ');
      expect(malayalamDate.ahargana).to.equal(1857119);
    });
  });

  describe('fromGregorianDate 03', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      date = new Date(1983, 8, 21);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1159);
      expect(malayalamDate.month).to.equal(2);
      expect(malayalamDate.date).to.equal(5);
      expect(malayalamDate.sauraMasaName).to.equal('Kanya     ');
      expect(malayalamDate.masaName).to.equal('Kanni     ');
      expect(malayalamDate.mlMasaName).to.equal('കന്നി');
      expect(malayalamDate.naksatraName).to.equal('Chathayam');
      expect(malayalamDate.mlNaksatraName).to.equal('ചതയം');
      expect(malayalamDate.julianDay).to.equal(2445599);
      expect(malayalamDate.weekdayName).to.equal('Wednesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ബുധൻ');
      expect(malayalamDate.ahargana).to.equal(1857133);
    });
  });

  describe('fromGregorianDate 04', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      date = new Date(1979, 4, 22, 13, 45, 30);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1154);
      expect(malayalamDate.month).to.equal(10);
      expect(malayalamDate.date).to.equal(8);
      expect(malayalamDate.sauraMasaName).to.equal('Vrsa      ');
      expect(malayalamDate.masaName).to.equal('Idavam    ');
      expect(malayalamDate.mlMasaName).to.equal('ഇടവം');
      expect(malayalamDate.naksatraName).to.equal('Revathi');
      expect(malayalamDate.mlNaksatraName).to.equal('രേവതി');
      expect(malayalamDate.julianDay).to.equal(2444016);
      expect(malayalamDate.weekdayName).to.equal('Tuesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ചൊവ്വ');
      expect(malayalamDate.ahargana).to.equal(1855550);
    });
  });

  describe('default settings', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      settings = kollavarsham.settings;
    });

    it('should return default settings', function () {
      expect(settings.system).to.equal('SuryaSiddhanta');
      expect(settings.latitude).to.equal(23.2);
      expect(settings.longitude).to.equal(75.8);
    });
  });

  describe('non-default settings', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham({system : 'InPancasiddhantika', latitude : 10.5, longitude : 77.2});
      settings = kollavarsham.settings;
    });

    it('should return default settings', function () {
      expect(settings.system).to.equal('InPancasiddhantika');
      expect(settings.latitude).to.equal(10.5);
      expect(settings.longitude).to.equal(77.2);
    });
  });

  describe('toGregorianDate', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
    });

    it('should throw appropriate exception', function () {
      expect(function () {
        kollavarsham.toGregorianDate(new KollavarshamDate());
      }).to.throw('When the API is implemented, will convert 0001 01 01');
    });
  });

  describe('toGregorianDateFromSaka - with invalid Saka Date', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      hinduDate = {
        year  : 1937,
        month : 4,
        paksa : 'Krsnapaksa',
        tithi : 12
      };
    });

    it('should throw appropriate exception', function () {
      expect(function () {
        kollavarsham.toGregorianDateFromSaka(hinduDate);
      }).to.throw('Parameter sakaDate should be an instance of the \'SakaDate\' class');
    });
  });

  describe('toGregorianDateFromSaka 01', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      hinduDate = new SakaDate(1937, 4, 12, 'Krsnapaksa');
      date = kollavarsham.toGregorianDateFromSaka(hinduDate);
    });

    it('should return a valid date', function () {
      expect(date.gregorianDate.getFullYear()).to.equal(2015);
      expect(date.gregorianDate.getMonth()).to.equal(8);
      expect(date.gregorianDate.getDate()).to.equal(10);

      expect(date.julianDay).to.equal(2457276);
      expect(date.weekdayName).to.equal('Thursday');
      expect(date.ahargana).to.equal(1868810);
    });
  });

  describe('toGregorianDateFromSaka 02', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      hinduDate = new SakaDate(1937, 4, 12, 'Suklapaksa');
      date = kollavarsham.toGregorianDateFromSaka(hinduDate);
    });

    it('should return a valid date', function () {
      expect(date.gregorianDate.getFullYear()).to.equal(2015);
      expect(date.gregorianDate.getMonth()).to.equal(7);
      expect(date.gregorianDate.getDate()).to.equal(26);

      expect(date.julianDay).to.equal(2457261);
      expect(date.weekdayName).to.equal('Wednesday');
      expect(date.ahargana).to.equal(1868795);
    });
  });

  describe('toGregorianDateFromSaka 03', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham(DefaultSettings);
      hinduDate = new SakaDate(1437, 4, 12, 'Suklapaksa');
      date = kollavarsham.toGregorianDateFromSaka(hinduDate);
    });

    it('should return a valid Julian Date', function () {
      // eslint-disable-next-line no-unused-expressions
      expect(JulianDate.prototype.isPrototypeOf(date.gregorianDate)).to.be.true; // eslint-disable-line no-prototype-builtins
      expect(date.gregorianDate.year).to.equal(1515);
      expect(date.gregorianDate.month).to.equal(7);
      expect(date.gregorianDate.date).to.equal(23);

      expect(date.julianDay).to.equal(2274615);
      expect(date.weekdayName).to.equal('Monday');
      expect(date.ahargana).to.equal(1686149);
    });
  });

});
