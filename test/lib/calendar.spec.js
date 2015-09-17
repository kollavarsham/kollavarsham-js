import {expect} from 'chai';

import MathHelper from '../../lib/mathHelper.js';
import Calendar from '../../lib/calendar.js';

describe('Calendar', function () {

  let calendar;

  const settings = {
    latitude     : 23.2,
    longitude    : 75.8,
    outputformat : 'verbose'
  };

  const cmpDates = function (date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  };

  beforeEach(function () {
    calendar = new Calendar(settings);
  });


  describe('nextDate', function () {

    it('should return correct results', function () {

      expect(cmpDates(calendar.nextDate(new Date(2013, Calendar.months.December, 31)), new Date(2014, Calendar.months.January, 1))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(2012, Calendar.months.January, 31)), new Date(2012, Calendar.months.February, 1))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(2013, Calendar.months.February, 28)), new Date(2013, Calendar.months.March, 1))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(2012, Calendar.months.February, 28)), new Date(2012, Calendar.months.February, 29))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(1950, Calendar.months.February, 1)), new Date(1950, Calendar.months.February, 2))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(1997, Calendar.months.September, 30)), new Date(1997, Calendar.months.October, 1))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(1752, Calendar.months.March, 24)), new Date(1752, Calendar.months.March, 25))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(1752, Calendar.months.September, 2)), new Date(1752, Calendar.months.September, 3))).to.be.true;
      expect(cmpDates(calendar.nextDate(new Date(1997, Calendar.months.December, 30)), new Date(1997, Calendar.months.December, 31))).to.be.true;

    });

  });

  describe('gregorianDateToJulianDay', function () {

    it('should return correct results', function () {

      expect(Calendar.gregorianDateToJulianDay(new Date(2014, Calendar.months.February, 16))).to.equal(2456704.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(2013, Calendar.months.December, 30))).to.equal(2456656.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(2013, Calendar.months.December, 31))).to.equal(2456657.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(2012, Calendar.months.January, 31))).to.equal(2455957.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(2013, Calendar.months.February, 28))).to.equal(2456351.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(2012, Calendar.months.February, 28))).to.equal(2455985.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(2001, Calendar.months.January, 1))).to.equal(2451910.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(1950, Calendar.months.February, 1))).to.equal(2433313.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(1997, Calendar.months.September, 30))).to.equal(2450721.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.March, 24))).to.equal(2361047.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.September, 2))).to.equal(2361209.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(1997, Calendar.months.December, 30))).to.equal(2450812.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(-1, Calendar.months.January, 31))).to.equal(1720722.5);
      expect(Calendar.gregorianDateToJulianDay(new Date(-4, Calendar.months.October, 31))).to.equal(1719900.5);

      // Special case for setting dates from years 0 - 99 AD
      const dateFrom7AD = new Date(7, Calendar.months.January, 1);
      dateFrom7AD.setFullYear(7);
      expect(Calendar.gregorianDateToJulianDay(dateFrom7AD)).to.equal(1723614.5);

      const dateFrom0AD = new Date(0, Calendar.months.January, 1);
      dateFrom0AD.setFullYear(0);
      expect(Calendar.gregorianDateToJulianDay(dateFrom0AD)).to.equal(1721057.5);

    });

  });

  describe('julianInEngland', function () {

    it('should return correct results', function () {

      expect(calendar.julianInEngland(2299158.5)).to.equal(false);
      expect(calendar.julianInEngland(2299159.5)).to.equal(false);
      expect(calendar.julianInEngland(2299160.5)).to.equal(true);
      expect(calendar.julianInEngland(2299161.5)).to.equal(true);
      expect(calendar.julianInEngland(2361220.5)).to.equal(true);
      expect(calendar.julianInEngland(2361221.5)).to.equal(false);
      expect(calendar.julianInEngland(2361222.5)).to.equal(false);

    });

  });

  describe('julianInEnglandFromGregorian', function () {

    it('should return correct results', function () {

      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(200, Calendar.months.January, 31)))).to.equal(false);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1582, Calendar.months.October, 12)))).to.equal(false);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1582, Calendar.months.October, 13)))).to.equal(false);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1582, Calendar.months.October, 14)))).to.equal(false);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1582, Calendar.months.October, 15)))).to.equal(true);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1582, Calendar.months.October, 16)))).to.equal(true);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.September, 11)))).to.equal(true);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.September, 12)))).to.equal(true);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.September, 13)))).to.equal(true);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.September, 14)))).to.equal(false);
      expect(calendar.julianInEngland(Calendar.gregorianDateToJulianDay(new Date(1752, Calendar.months.September, 15)))).to.equal(false);

    });

  });

  describe('julianDayToJulianDate', function () {

    it('should return correct results', function () {

      expect(Calendar.julianDayToJulianDate(2299158.5).toString()).to.equal('1582 10 02');
      expect(Calendar.julianDayToJulianDate(2299159.5).toString()).to.equal('1582 10 03');
      expect(Calendar.julianDayToJulianDate(2299160.5).toString()).to.equal('1582 10 04');
      expect(Calendar.julianDayToJulianDate(2299161.5).toString()).to.equal('1582 10 05');
      expect(Calendar.julianDayToJulianDate(2361220.5).toString()).to.equal('1752 09 01');
      expect(Calendar.julianDayToJulianDate(2361221.5).toString()).to.equal('1752 09 02');
      expect(Calendar.julianDayToJulianDate(2361222.5).toString()).to.equal('1752 09 03');
      expect(Calendar.julianDayToJulianDate(1721457.5).toString()).to.equal('0001 02 03');

    });

  });

  describe('julianDayToGregorianDate', function () {

    it('should return correct results', function () {

      expect(cmpDates(Calendar.julianDayToGregorianDate(2299158.5), new Date(1582, Calendar.months.October, 13))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2299159.5), new Date(1582, Calendar.months.October, 14))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2299160.5), new Date(1582, Calendar.months.October, 15))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2299161.5), new Date(1582, Calendar.months.October, 16))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2361220.5), new Date(1752, Calendar.months.September, 13))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2361221.5), new Date(1752, Calendar.months.September, 14))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2361222.5), new Date(1752, Calendar.months.September, 15))).to.be.true;

      const dateFrom1AD = new Date(1, Calendar.months.February, 2);
      dateFrom1AD.setFullYear(1);

      expect(cmpDates(Calendar.julianDayToGregorianDate(1721457.5), dateFrom1AD)).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2456656.5), new Date(2013, Calendar.months.December, 30))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2456657.5), new Date(2013, Calendar.months.December, 31))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2455957.5), new Date(2012, Calendar.months.January, 31))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2456351.5), new Date(2013, Calendar.months.February, 28))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2455985.5), new Date(2012, Calendar.months.February, 28))).to.be.true;
      expect(cmpDates(Calendar.julianDayToGregorianDate(2433313.5), new Date(1950, Calendar.months.February, 1))).to.be.true;

    });

  });

  describe('julianDayToModernDate', function () {

    it('should return correct results', function () {

      expect(Calendar.julianDayToModernDate(2299158.5).toString()).to.equal('1582 10 02');
      expect(Calendar.julianDayToModernDate(2299159.5).toString()).to.equal('1582 10 03');
      expect(Calendar.julianDayToModernDate(2299160.5).toString()).to.equal('1582 10 04');
      expect(Calendar.julianDayToModernDate(2299161.5).toString()).to.equal('1582 10 05');
      expect(Calendar.julianDayToModernDate(1721457.5).toString()).to.equal('0001 02 03');
      expect(cmpDates(Calendar.julianDayToModernDate(2361220.5), new Date(1752, Calendar.months.September, 13))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2361221.5), new Date(1752, Calendar.months.September, 14))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2361222.5), new Date(1752, Calendar.months.September, 15))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2456656.5), new Date(2013, Calendar.months.December, 30))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2456657.5), new Date(2013, Calendar.months.December, 31))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2455957.5), new Date(2012, Calendar.months.January, 31))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2456351.5), new Date(2013, Calendar.months.February, 28))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2455985.5), new Date(2012, Calendar.months.February, 28))).to.be.true;
      expect(cmpDates(Calendar.julianDayToModernDate(2433313.5), new Date(1950, Calendar.months.February, 1))).to.be.true;

    });

  });

  describe('julianDayToAhargana', function () {

    it('should return correct results', function () {

      expect(Calendar.julianDayToAhargana(2299158.5)).to.equal(1710693);
      expect(Calendar.julianDayToAhargana(2299159.5)).to.equal(1710694);
      expect(Calendar.julianDayToAhargana(2299160.5)).to.equal(1710695);
      expect(Calendar.julianDayToAhargana(2299161.5)).to.equal(1710696);
      expect(Calendar.julianDayToAhargana(2361220.5)).to.equal(1772755);
      expect(Calendar.julianDayToAhargana(2361221.5)).to.equal(1772756);
      expect(Calendar.julianDayToAhargana(2361222.5)).to.equal(1772757);
      expect(Calendar.julianDayToAhargana(1721457.5)).to.equal(1132992);
      expect(Calendar.julianDayToAhargana(2456656.5)).to.equal(1868191);
      expect(Calendar.julianDayToAhargana(2456657.5)).to.equal(1868192);
      expect(Calendar.julianDayToAhargana(2455957.5)).to.equal(1867492);
      expect(Calendar.julianDayToAhargana(2456351.5)).to.equal(1867886);
      expect(Calendar.julianDayToAhargana(2455985.5)).to.equal(1867520);
      expect(Calendar.julianDayToAhargana(2433313.5)).to.equal(1844848);

    });

  });

  describe('aharganaToJulianDay', function () {

    it('should return correct results', function () {

      expect(Calendar.aharganaToJulianDay(1710693)).to.equal(2299158.5);
      expect(Calendar.aharganaToJulianDay(1710694)).to.equal(2299159.5);
      expect(Calendar.aharganaToJulianDay(1710695)).to.equal(2299160.5);
      expect(Calendar.aharganaToJulianDay(1710696)).to.equal(2299161.5);
      expect(Calendar.aharganaToJulianDay(1772755)).to.equal(2361220.5);
      expect(Calendar.aharganaToJulianDay(1772756)).to.equal(2361221.5);
      expect(Calendar.aharganaToJulianDay(1772757)).to.equal(2361222.5);
      expect(Calendar.aharganaToJulianDay(1132992)).to.equal(1721457.5);
      expect(Calendar.aharganaToJulianDay(1868191)).to.equal(2456656.5);
      expect(Calendar.aharganaToJulianDay(1868192)).to.equal(2456657.5);
      expect(Calendar.aharganaToJulianDay(1867492)).to.equal(2455957.5);
      expect(Calendar.aharganaToJulianDay(1867886)).to.equal(2456351.5);
      expect(Calendar.aharganaToJulianDay(1867520)).to.equal(2455985.5);
      expect(Calendar.aharganaToJulianDay(1844848)).to.equal(2433313.5);

    });

  });

  describe('julianDayToWeekday', function () {

    it('should return correct results', function () {

      expect(Calendar.julianDayToWeekday(2299158.5).en).to.equal('Wednesday');
      expect(Calendar.julianDayToWeekday(2299159.5).en).to.equal('Thursday');
      expect(Calendar.julianDayToWeekday(2299160.5).en).to.equal('Friday');
      expect(Calendar.julianDayToWeekday(2299161.5).en).to.equal('Saturday');
      expect(Calendar.julianDayToWeekday(2361220.5).en).to.equal('Wednesday');
      expect(Calendar.julianDayToWeekday(2361221.5).en).to.equal('Thursday');
      expect(Calendar.julianDayToWeekday(2361222.5).en).to.equal('Friday');
      expect(Calendar.julianDayToWeekday(1721457.5).en).to.equal('Friday');
      expect(Calendar.julianDayToWeekday(2456656.5).en).to.equal('Monday');
      expect(Calendar.julianDayToWeekday(2456657.5).en).to.equal('Tuesday');
      expect(Calendar.julianDayToWeekday(2455957.5).en).to.equal('Tuesday');
      expect(Calendar.julianDayToWeekday(2456351.5).en).to.equal('Thursday');
      expect(Calendar.julianDayToWeekday(2455985.5).en).to.equal('Tuesday');
      expect(Calendar.julianDayToWeekday(2433313.5).en).to.equal('Wednesday');
      expect(Calendar.julianDayToWeekday(2299158.5).ml).to.equal('ബുധൻ');
      expect(Calendar.julianDayToWeekday(2299159.5).ml).to.equal('വ്യാഴം');
      expect(Calendar.julianDayToWeekday(2299160.5).ml).to.equal('വെള്ളി');
      expect(Calendar.julianDayToWeekday(2299161.5).ml).to.equal('ശനി');
      expect(Calendar.julianDayToWeekday(2361220.5).ml).to.equal('ബുധൻ');
      expect(Calendar.julianDayToWeekday(2361221.5).ml).to.equal('വ്യാഴം');
      expect(Calendar.julianDayToWeekday(2361222.5).ml).to.equal('വെള്ളി');
      expect(Calendar.julianDayToWeekday(1721457.5).ml).to.equal('വെള്ളി');
      expect(Calendar.julianDayToWeekday(2456656.5).ml).to.equal('തിങ്കൾ');
      expect(Calendar.julianDayToWeekday(2456657.5).ml).to.equal('ചൊവ്വ');
      expect(Calendar.julianDayToWeekday(2455957.5).ml).to.equal('ചൊവ്വ');
      expect(Calendar.julianDayToWeekday(2456351.5).ml).to.equal('വ്യാഴം');
      expect(Calendar.julianDayToWeekday(2455985.5).ml).to.equal('ചൊവ്വ');
      expect(Calendar.julianDayToWeekday(2433313.5).ml).to.equal('ബുധൻ');

    });

  });

  describe('getAdhimasa', function () {

    it('should return correct results', function () {

      expect(Calendar.getAdhimasa(116.77137869307474, 145.3418709668737)).to.equal('');
      expect(Calendar.getAdhimasa(120.49240077447713, 148.98071378678225)).to.equal('Adhika-');

    });

  });

  describe('getMasaNum', function () {

    it('should return correct results', function () {

      expect(Calendar.getMasaNum(31.3101877453024, 190.002232417937)).to.equal(1);
      expect(Calendar.getMasaNum(42.2597957259723, 209.07961889886)).to.equal(1);
      expect(Calendar.getMasaNum(59.2349729472294, 183.469749507872)).to.equal(1);
      expect(Calendar.getMasaNum(62.5975972349908, 208.58681756282)).to.equal(2);
      expect(Calendar.getMasaNum(80.4818781723799, 180.203508055438)).to.equal(2);
      expect(Calendar.getMasaNum(121.1497130809087, 208.340416894636)).to.equal(4);
      expect(Calendar.getMasaNum(320.8687779979979, 195.735990965544)).to.equal(10);
      expect(Calendar.getMasaNum(131.3101877453024, 10.002232417937)).to.equal(4);
      expect(Calendar.getMasaNum(242.2597957259723, 9.07961889886)).to.equal(8);
      expect(Calendar.getMasaNum(359.2349729472294, 83.469749507872)).to.equal(11);
      expect(Calendar.getMasaNum(62.5975972349908, 108.58681756282)).to.equal(2);
      expect(Calendar.getMasaNum(280.4818781723799, 180.203508055438)).to.equal(9);
      expect(Calendar.getMasaNum(21.1497130809087, 108.340416894636)).to.equal(0);
      expect(Calendar.getMasaNum(20.8687779979979, 286.735990965544)).to.equal(0);

    });

  });

  describe('getSauraMasaMonthDay', function () {

    it('should return correct results', function () {

      expect(calendar.getSauraMasaMonthDay(2299158.5, 0).month).to.equal(7);
      expect(calendar.getSauraMasaMonthDay(2299159.5, 0).month).to.equal(7);
      expect(calendar.getSauraMasaMonthDay(2299160.5, 0).month).to.equal(7);
      expect(calendar.getSauraMasaMonthDay(2299161.5, 0).month).to.equal(7);
      expect(calendar.getSauraMasaMonthDay(2361220.5, 0).month).to.equal(6);
      expect(calendar.getSauraMasaMonthDay(2361221.5, 0).month).to.equal(6);
      expect(calendar.getSauraMasaMonthDay(2361222.5, 0).month).to.equal(6);
      expect(calendar.getSauraMasaMonthDay(1721457.5, 0).month).to.equal(11);
      expect(calendar.getSauraMasaMonthDay(2456656.5, 0).month).to.equal(9);
      expect(calendar.getSauraMasaMonthDay(2456657.5, 0).month).to.equal(9);
      expect(calendar.getSauraMasaMonthDay(2455957.5, 0).month).to.equal(10);
      expect(calendar.getSauraMasaMonthDay(2456351.5, 0).month).to.equal(11);
      expect(calendar.getSauraMasaMonthDay(2455985.5, 0).month).to.equal(11);
      expect(calendar.getSauraMasaMonthDay(2433313.5, 0).month).to.equal(10);
      expect(calendar.getSauraMasaMonthDay(2299158.5, 0).day).to.equal(6);
      expect(calendar.getSauraMasaMonthDay(2299159.5, 0).day).to.equal(7);
      expect(calendar.getSauraMasaMonthDay(2299160.5, 0).day).to.equal(8);
      expect(calendar.getSauraMasaMonthDay(2299161.5, 0).day).to.equal(9);
      expect(calendar.getSauraMasaMonthDay(2361220.5, 0).day).to.equal(4);
      expect(calendar.getSauraMasaMonthDay(2361221.5, 0).day).to.equal(5);
      expect(calendar.getSauraMasaMonthDay(2361222.5, 0).day).to.equal(6);
      expect(calendar.getSauraMasaMonthDay(1721457.5, 0).day).to.equal(27);
      expect(calendar.getSauraMasaMonthDay(2456656.5, 0).day).to.equal(19);
      expect(calendar.getSauraMasaMonthDay(2456657.5, 0).day).to.equal(20);
      expect(calendar.getSauraMasaMonthDay(2455957.5, 0).day).to.equal(21);
      expect(calendar.getSauraMasaMonthDay(2456351.5, 0).day).to.equal(20);
      expect(calendar.getSauraMasaMonthDay(2455985.5, 0).day).to.equal(19);
      expect(calendar.getSauraMasaMonthDay(2433313.5, 0).day).to.equal(23);
      expect(calendar.getSauraMasaMonthDay(2313.5, 0).day).to.equal(31);

    });

  });

  describe('findSamkranti', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(calendar.findSamkranti(1868206, 1868207), 1868206.71761142)).to.be.true;
      expect(MathHelper.floatingPointEqual(calendar.findSamkranti(1868236, 1868237), 1868236.15636098)).to.be.true;
      expect(MathHelper.floatingPointEqual(calendar.findSamkranti(1868266, 1868267), 1868266.00000001)).to.be.true;
      expect(MathHelper.floatingPointEqual(calendar.findSamkranti(1721431, 1721432), 1721431.9425787)).to.be.true;
      expect(MathHelper.floatingPointEqual(calendar.findSamkranti(2299153, 2299154), 2299153.23922039)).to.be.true;

    });

  });

  describe('getMasaName', function () {

    it('should return correct results', function () {

      expect(Calendar.getMasaName(0).saka).to.equal('Caitra    ');
      expect(Calendar.getMasaName(1).saka).to.equal('Vaisakha  ');
      expect(Calendar.getMasaName(2).saka).to.equal('Jyaistha  ');
      expect(Calendar.getMasaName(3).saka).to.equal('Asadha    ');
      expect(Calendar.getMasaName(4).saka).to.equal('Sravana   ');
      expect(Calendar.getMasaName(5).saka).to.equal('Bhadrapada');
      expect(Calendar.getMasaName(6).saka).to.equal('Asvina    ');
      expect(Calendar.getMasaName(7).saka).to.equal('Karttika  ');
      expect(Calendar.getMasaName(8).saka).to.equal('Margasirsa');
      expect(Calendar.getMasaName(9).saka).to.equal('Pausa     ');
      expect(Calendar.getMasaName(10).saka).to.equal('Magha     ');
      expect(Calendar.getMasaName(11).saka).to.equal('Phalguna  ');
      expect(Calendar.getMasaName(0).saura).to.equal('Mesa      ');
      expect(Calendar.getMasaName(1).saura).to.equal('Vrsa      ');
      expect(Calendar.getMasaName(2).saura).to.equal('Mithuna   ');
      expect(Calendar.getMasaName(3).saura).to.equal('Karkata   ');
      expect(Calendar.getMasaName(4).saura).to.equal('Simha     ');
      expect(Calendar.getMasaName(5).saura).to.equal('Kanya     ');
      expect(Calendar.getMasaName(6).saura).to.equal('Tula      ');
      expect(Calendar.getMasaName(7).saura).to.equal('Vrscika   ');
      expect(Calendar.getMasaName(8).saura).to.equal('Dhanus    ');
      expect(Calendar.getMasaName(9).saura).to.equal('Makara    ');
      expect(Calendar.getMasaName(10).saura).to.equal('Kumbha    ');
      expect(Calendar.getMasaName(11).saura).to.equal('Mina      ');
      expect(Calendar.getMasaName(0).enMalayalam).to.equal('Chingam   ');
      expect(Calendar.getMasaName(1).enMalayalam).to.equal('Kanni     ');
      expect(Calendar.getMasaName(2).enMalayalam).to.equal('Thulam    ');
      expect(Calendar.getMasaName(3).enMalayalam).to.equal('Vrischikam');
      expect(Calendar.getMasaName(4).enMalayalam).to.equal('Dhanu     ');
      expect(Calendar.getMasaName(5).enMalayalam).to.equal('Makaram   ');
      expect(Calendar.getMasaName(6).enMalayalam).to.equal('Kumbham   ');
      expect(Calendar.getMasaName(7).enMalayalam).to.equal('Meenam    ');
      expect(Calendar.getMasaName(8).enMalayalam).to.equal('Medam     ');
      expect(Calendar.getMasaName(9).enMalayalam).to.equal('Idavam    ');
      expect(Calendar.getMasaName(10).enMalayalam).to.equal('Mithunam  ');
      expect(Calendar.getMasaName(11).enMalayalam).to.equal('Karkitakam');
      expect(Calendar.getMasaName(0).mlMalayalam).to.equal('ചിങ്ങം');
      expect(Calendar.getMasaName(1).mlMalayalam).to.equal('കന്നി');
      expect(Calendar.getMasaName(2).mlMalayalam).to.equal('തുലാം');
      expect(Calendar.getMasaName(3).mlMalayalam).to.equal('വൃശ്ചികം');
      expect(Calendar.getMasaName(4).mlMalayalam).to.equal('ധനു');
      expect(Calendar.getMasaName(5).mlMalayalam).to.equal('മകരം');
      expect(Calendar.getMasaName(6).mlMalayalam).to.equal('കുംഭം');
      expect(Calendar.getMasaName(7).mlMalayalam).to.equal('മീനം');
      expect(Calendar.getMasaName(8).mlMalayalam).to.equal('മേടം');
      expect(Calendar.getMasaName(9).mlMalayalam).to.equal('ഇടവം');
      expect(Calendar.getMasaName(10).mlMalayalam).to.equal('മിഥുനം');
      expect(Calendar.getMasaName(11).mlMalayalam).to.equal('കർക്കടകം');

    });

  });

  describe('getNaksatra', function () {

    it('should return correct results', function () {

      expect(Calendar.getNaksatra(167.084587116821).saka).to.equal('Hasta');
      expect(Calendar.getNaksatra(179.618866280373).saka).to.equal('Citra');
      expect(Calendar.getNaksatra(191.953219840454).saka).to.equal('Svati');
      expect(Calendar.getNaksatra(204.131519861513).saka).to.equal('Visakha');
      expect(Calendar.getNaksatra(349.195739637822).saka).to.equal('Revati');
      expect(Calendar.getNaksatra(1.82309136307406).saka).to.equal('Asvini');
      expect(Calendar.getNaksatra(14.6945040053245).saka).to.equal('Bharani');
      expect(Calendar.getNaksatra(6.55724149356419).saka).to.equal('Asvini');
      expect(Calendar.getNaksatra(16.24829446685).saka).to.equal('Bharani');
      expect(Calendar.getNaksatra(29.8253740270552).saka).to.equal('Krttika');
      expect(Calendar.getNaksatra(156.709071062542).saka).to.equal('U-phalguni');
      expect(Calendar.getNaksatra(316.081404838166).saka).to.equal('Satabhisaj');
      expect(Calendar.getNaksatra(165.854323537076).saka).to.equal('Hasta');
      expect(Calendar.getNaksatra(236.806759936797).saka).to.equal('Jyestha');
      expect(Calendar.getNaksatra(167.084587116821).enMalayalam).to.equal('Atham');
      expect(Calendar.getNaksatra(179.618866280373).enMalayalam).to.equal('Chithra');
      expect(Calendar.getNaksatra(191.953219840454).enMalayalam).to.equal('Chothi');
      expect(Calendar.getNaksatra(204.131519861513).enMalayalam).to.equal('Vishakham');
      expect(Calendar.getNaksatra(349.195739637822).enMalayalam).to.equal('Revathi');
      expect(Calendar.getNaksatra(1.82309136307406).enMalayalam).to.equal('Ashwathi');
      expect(Calendar.getNaksatra(14.6945040053245).enMalayalam).to.equal('Bharani');
      expect(Calendar.getNaksatra(6.55724149356419).enMalayalam).to.equal('Ashwathi');
      expect(Calendar.getNaksatra(16.24829446685).enMalayalam).to.equal('Bharani');
      expect(Calendar.getNaksatra(29.8253740270552).enMalayalam).to.equal('Karthika');
      expect(Calendar.getNaksatra(156.709071062542).enMalayalam).to.equal('Uthram');
      expect(Calendar.getNaksatra(316.081404838166).enMalayalam).to.equal('Chathayam');
      expect(Calendar.getNaksatra(165.854323537076).enMalayalam).to.equal('Atham');
      expect(Calendar.getNaksatra(236.806759936797).enMalayalam).to.equal('Thrikketta');
      expect(Calendar.getNaksatra(167.084587116821).mlMalayalam).to.equal('അത്തം');
      expect(Calendar.getNaksatra(179.618866280373).mlMalayalam).to.equal('ചിത്ര');
      expect(Calendar.getNaksatra(191.953219840454).mlMalayalam).to.equal('ചോതി');
      expect(Calendar.getNaksatra(204.131519861513).mlMalayalam).to.equal('വിശാഖം');
      expect(Calendar.getNaksatra(349.195739637822).mlMalayalam).to.equal('രേവതി');
      expect(Calendar.getNaksatra(1.82309136307406).mlMalayalam).to.equal('അശ്വതി');
      expect(Calendar.getNaksatra(14.6945040053245).mlMalayalam).to.equal('ഭരണി');
      expect(Calendar.getNaksatra(6.55724149356419).mlMalayalam).to.equal('അശ്വതി');
      expect(Calendar.getNaksatra(16.24829446685).mlMalayalam).to.equal('ഭരണി');
      expect(Calendar.getNaksatra(29.8253740270552).mlMalayalam).to.equal('കാർത്തിക');
      expect(Calendar.getNaksatra(156.709071062542).mlMalayalam).to.equal('ഉത്രം');
      expect(Calendar.getNaksatra(316.081404838166).mlMalayalam).to.equal('ചതയം');
      expect(Calendar.getNaksatra(165.854323537076).mlMalayalam).to.equal('അത്തം');
      expect(Calendar.getNaksatra(236.806759936797).mlMalayalam).to.equal('തൃക്കേട്ട');

    });

  });

  describe('aharganaToKali', function () {

    it('should return correct results', function () {

      expect(calendar.aharganaToKali(1710693)).to.equal(4683);
      expect(calendar.aharganaToKali(1710694)).to.equal(4683);
      expect(calendar.aharganaToKali(1710695)).to.equal(4683);
      expect(calendar.aharganaToKali(1710696)).to.equal(4683);
      expect(calendar.aharganaToKali(1772755)).to.equal(4853);
      expect(calendar.aharganaToKali(1772756)).to.equal(4853);
      expect(calendar.aharganaToKali(1772757)).to.equal(4853);
      expect(calendar.aharganaToKali(1132992)).to.equal(3101);
      expect(calendar.aharganaToKali(1868191)).to.equal(5114);
      expect(calendar.aharganaToKali(1868192)).to.equal(5114);
      expect(calendar.aharganaToKali(1867492)).to.equal(5112);
      expect(calendar.aharganaToKali(1867886)).to.equal(5113);
      expect(calendar.aharganaToKali(1867520)).to.equal(5112);
      expect(calendar.aharganaToKali(1844848)).to.equal(5050);

    });

  });

  describe('kaliToSaka', function () {

    it('should return correct results', function () {

      expect(Calendar.kaliToSaka(4683)).to.equal(1504);
      expect(Calendar.kaliToSaka(4683)).to.equal(1504);
      expect(Calendar.kaliToSaka(4683)).to.equal(1504);
      expect(Calendar.kaliToSaka(4683)).to.equal(1504);
      expect(Calendar.kaliToSaka(4853)).to.equal(1674);
      expect(Calendar.kaliToSaka(4853)).to.equal(1674);
      expect(Calendar.kaliToSaka(4853)).to.equal(1674);
      expect(Calendar.kaliToSaka(3101)).to.equal(-78);
      expect(Calendar.kaliToSaka(5114)).to.equal(1935);
      expect(Calendar.kaliToSaka(5114)).to.equal(1935);
      expect(Calendar.kaliToSaka(5112)).to.equal(1933);
      expect(Calendar.kaliToSaka(5113)).to.equal(1934);
      expect(Calendar.kaliToSaka(5112)).to.equal(1933);
      expect(Calendar.kaliToSaka(5050)).to.equal(1871);

    });

  });

});
