import {expect} from 'chai';

import Kollavarsham from '../../lib/index.js';
import JulianDate from '../../lib/dates/julianDate.js';
import SakaDate from '../../lib/dates/sakaDate.js';

describe('Kollavarsham', function () {

  let kollavarsham;
  let date;
  let malayalamDate;
  let settings;
  let hinduDate;

  it('should be defined', function () {
    expect(Kollavarsham).to.exist;
  });

  describe('fromGregorianDate 01', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      date = new Date(1979, 4, 22);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1154);
      expect(malayalamDate.month).to.equal(10);
      expect(malayalamDate.day).to.equal(8);
      expect(malayalamDate.calendarData.paksa).to.equal('Krsnapaksa');
      expect(malayalamDate.calendarData.YearKali).to.equal(5080);
      expect(malayalamDate.calendarData.YearSaka).to.equal(1901);
      expect(malayalamDate.calendarData.YearVikrama).to.equal(2036);
      expect(malayalamDate.calendarData.masaNum).to.equal(1);
      expect(malayalamDate.calendarData.sauraMasa).to.equal('Vrsa      ');
      expect(malayalamDate.calendarData.malayalaMasa).to.equal('Idavam    ');
      expect(malayalamDate.calendarData.mlMalayalaMasa).to.equal('ഇടവം');
      expect(malayalamDate.calendarData.malayalaMasaNum).to.equal(9);
      expect(malayalamDate.calendarData.tithiDay).to.equal(11);
      expect(malayalamDate.calendarData.ftithi).to.equal(0.7870052988803486);
      expect(malayalamDate.calendarData.sunriseTime.hour).to.equal(5);
      expect(malayalamDate.calendarData.sunriseTime.minute).to.equal(23);
      expect(malayalamDate.calendarData.adhimasa).to.equal('');
      expect(malayalamDate.calendarData.masa).to.equal('Vaisakha  ');
      expect(malayalamDate.calendarData.naksatra).to.equal('U-bhadrapada');
      expect(malayalamDate.calendarData.malayalaNaksatra).to.equal('Uthrattathi');
      expect(malayalamDate.calendarData.mlMalayalaNaksatra).to.equal('ഉത്രട്ടാതി');
      expect(malayalamDate.julianDay).to.equal(2444016);
      expect(malayalamDate.weekdayName).to.equal('Tuesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ചൊവ്വ');
      expect(malayalamDate.ahargana).to.equal(1855550);
    });
  });

  describe('fromGregorianDate 02', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      date = new Date(1983, 8, 7);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1159);
      expect(malayalamDate.month).to.equal(1);
      expect(malayalamDate.day).to.equal(22);
      expect(malayalamDate.calendarData.paksa).to.equal('Krsnapaksa');
      expect(malayalamDate.calendarData.YearKali).to.equal(5084);
      expect(malayalamDate.calendarData.YearSaka).to.equal(1905);
      expect(malayalamDate.calendarData.YearVikrama).to.equal(2040);
      expect(malayalamDate.calendarData.masaNum).to.equal(4);
      expect(malayalamDate.calendarData.sauraMasa).to.equal('Simha     ');
      expect(malayalamDate.calendarData.malayalaMasa).to.equal('Chingam   ');
      expect(malayalamDate.calendarData.mlMalayalaMasa).to.equal('ചിങ്ങം');
      expect(malayalamDate.calendarData.malayalaMasaNum).to.equal(0);
      expect(malayalamDate.calendarData.tithiDay).to.equal(15);
      expect(malayalamDate.calendarData.ftithi).to.equal(0.8896846200537567);
      expect(malayalamDate.calendarData.sunriseTime.hour).to.equal(5);
      expect(malayalamDate.calendarData.sunriseTime.minute).to.equal(48);
      expect(malayalamDate.calendarData.adhimasa).to.equal('');
      expect(malayalamDate.calendarData.masa).to.equal('Sravana   ');
      expect(malayalamDate.calendarData.naksatra).to.equal('P-phalguni');
      expect(malayalamDate.calendarData.malayalaNaksatra).to.equal('Pooram');
      expect(malayalamDate.calendarData.mlMalayalaNaksatra).to.equal('പൂരം');
      expect(malayalamDate.julianDay).to.equal(2445585);
      expect(malayalamDate.weekdayName).to.equal('Wednesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ബുധൻ');
      expect(malayalamDate.ahargana).to.equal(1857119);
    });
  });

  describe('fromGregorianDate 03', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      date = new Date(1983, 8, 21);
      malayalamDate = kollavarsham.fromGregorianDate(date);
    });

    it('should return a valid malayalam date', function () {
      expect(malayalamDate.year).to.equal(1159);
      expect(malayalamDate.month).to.equal(2);
      expect(malayalamDate.day).to.equal(5);
      expect(malayalamDate.calendarData.paksa).to.equal('Suklapaksa');
      expect(malayalamDate.calendarData.YearKali).to.equal(5084);
      expect(malayalamDate.calendarData.YearSaka).to.equal(1905);
      expect(malayalamDate.calendarData.YearVikrama).to.equal(2040);
      expect(malayalamDate.calendarData.masaNum).to.equal(5);
      expect(malayalamDate.calendarData.sauraMasa).to.equal('Kanya     ');
      expect(malayalamDate.calendarData.malayalaMasa).to.equal('Kanni     ');
      expect(malayalamDate.calendarData.mlMalayalaMasa).to.equal('കന്നി');
      expect(malayalamDate.calendarData.malayalaMasaNum).to.equal(1);
      expect(malayalamDate.calendarData.tithiDay).to.equal(14);
      expect(malayalamDate.calendarData.ftithi).to.equal(0.9732245662921084);
      expect(malayalamDate.calendarData.sunriseTime.hour).to.equal(5);
      expect(malayalamDate.calendarData.sunriseTime.minute).to.equal(58);
      expect(malayalamDate.calendarData.adhimasa).to.equal('');
      expect(malayalamDate.calendarData.masa).to.equal('Bhadrapada');
      expect(malayalamDate.calendarData.naksatra).to.equal('P-bhadrapada');
      expect(malayalamDate.calendarData.malayalaNaksatra).to.equal('Poororuttathi');
      expect(malayalamDate.calendarData.mlMalayalaNaksatra).to.equal('പൂരുരുട്ടാതി');
      expect(malayalamDate.julianDay).to.equal(2445599);
      expect(malayalamDate.weekdayName).to.equal('Wednesday');
      expect(malayalamDate.mlWeekdayName).to.equal('ബുധൻ');
      expect(malayalamDate.ahargana).to.equal(1857133);
    });
  });

  describe('default settings', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      settings = kollavarsham.getSettings();
    });

    it('should return default settings', function () {
      expect(settings.system).to.equal('SuryaSiddhanta');
      expect(settings.latitude).to.equal(23.2);
      expect(settings.longitude).to.equal(75.8);
    });
  });

  describe('setSystem', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      kollavarsham.setSystem('DUMMY SYSTEM');
    });

    it('should set the system', function () {
      expect(kollavarsham.getSettings().system).to.equal('DUMMY SYSTEM');
    });
  });

  describe('setLatitude', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      kollavarsham.setLatitude('DUMMY Latitude');
    });

    it('should set the latitude', function () {
      expect(kollavarsham.getSettings().latitude).to.equal('DUMMY Latitude');
    });
  });

  describe('setLongitude', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      kollavarsham.setLongitude('DUMMY Longitude');
    });

    it('should set the longitude', function () {
      expect(kollavarsham.getSettings().longitude).to.equal('DUMMY Longitude');
    });
  });

  describe('toGregorianDate', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
    });

    it('should throw appropriate exception', function () {
      expect(function () {
        kollavarsham.toGregorianDate('DUMMY KOLLAVARSHAM DATE');
      }).to.throw('When the API is implemented, will convert DUMMY KOLLAVARSHAM DATE');
    });
  });

  describe('toGregorianDateFromSaka - with invalid Saka Date', function () {
    beforeEach(function () {
      kollavarsham = new Kollavarsham();
      hinduDate = {
        yearSaka : 1937,
        masaNum  : 4,
        paksa    : 'Krsnapaksa',
        tithiDay : 12
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
      kollavarsham = new Kollavarsham();
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
      kollavarsham = new Kollavarsham();
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
      kollavarsham = new Kollavarsham();
      hinduDate = new SakaDate(1437, 4, 12, 'Suklapaksa');
      date = kollavarsham.toGregorianDateFromSaka(hinduDate);
    });

    it('should return a valid Julian Date', function () {
      expect(JulianDate.prototype.isPrototypeOf(date.gregorianDate)).to.be.true;
      expect(date.gregorianDate.year).to.equal(1515);
      expect(date.gregorianDate.month).to.equal(7);
      expect(date.gregorianDate.day).to.equal(23);

      expect(date.julianDay).to.equal(2274615);
      expect(date.weekdayName).to.equal('Monday');
      expect(date.ahargana).to.equal(1686149);
    });
  });

});
