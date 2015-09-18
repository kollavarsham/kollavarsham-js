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

  describe('getMasaName', function () {

    it('should return correct results', function () {

      expect(BaseDate.getMasaName(0).saka).to.equal('Caitra    ');
      expect(BaseDate.getMasaName(1).saka).to.equal('Vaisakha  ');
      expect(BaseDate.getMasaName(2).saka).to.equal('Jyaistha  ');
      expect(BaseDate.getMasaName(3).saka).to.equal('Asadha    ');
      expect(BaseDate.getMasaName(4).saka).to.equal('Sravana   ');
      expect(BaseDate.getMasaName(5).saka).to.equal('Bhadrapada');
      expect(BaseDate.getMasaName(6).saka).to.equal('Asvina    ');
      expect(BaseDate.getMasaName(7).saka).to.equal('Karttika  ');
      expect(BaseDate.getMasaName(8).saka).to.equal('Margasirsa');
      expect(BaseDate.getMasaName(9).saka).to.equal('Pausa     ');
      expect(BaseDate.getMasaName(10).saka).to.equal('Magha     ');
      expect(BaseDate.getMasaName(11).saka).to.equal('Phalguna  ');
      expect(BaseDate.getMasaName(0).saura).to.equal('Mesa      ');
      expect(BaseDate.getMasaName(1).saura).to.equal('Vrsa      ');
      expect(BaseDate.getMasaName(2).saura).to.equal('Mithuna   ');
      expect(BaseDate.getMasaName(3).saura).to.equal('Karkata   ');
      expect(BaseDate.getMasaName(4).saura).to.equal('Simha     ');
      expect(BaseDate.getMasaName(5).saura).to.equal('Kanya     ');
      expect(BaseDate.getMasaName(6).saura).to.equal('Tula      ');
      expect(BaseDate.getMasaName(7).saura).to.equal('Vrscika   ');
      expect(BaseDate.getMasaName(8).saura).to.equal('Dhanus    ');
      expect(BaseDate.getMasaName(9).saura).to.equal('Makara    ');
      expect(BaseDate.getMasaName(10).saura).to.equal('Kumbha    ');
      expect(BaseDate.getMasaName(11).saura).to.equal('Mina      ');
      expect(BaseDate.getMasaName(0).enMalayalam).to.equal('Chingam   ');
      expect(BaseDate.getMasaName(1).enMalayalam).to.equal('Kanni     ');
      expect(BaseDate.getMasaName(2).enMalayalam).to.equal('Thulam    ');
      expect(BaseDate.getMasaName(3).enMalayalam).to.equal('Vrischikam');
      expect(BaseDate.getMasaName(4).enMalayalam).to.equal('Dhanu     ');
      expect(BaseDate.getMasaName(5).enMalayalam).to.equal('Makaram   ');
      expect(BaseDate.getMasaName(6).enMalayalam).to.equal('Kumbham   ');
      expect(BaseDate.getMasaName(7).enMalayalam).to.equal('Meenam    ');
      expect(BaseDate.getMasaName(8).enMalayalam).to.equal('Medam     ');
      expect(BaseDate.getMasaName(9).enMalayalam).to.equal('Idavam    ');
      expect(BaseDate.getMasaName(10).enMalayalam).to.equal('Mithunam  ');
      expect(BaseDate.getMasaName(11).enMalayalam).to.equal('Karkitakam');
      expect(BaseDate.getMasaName(0).mlMalayalam).to.equal('ചിങ്ങം');
      expect(BaseDate.getMasaName(1).mlMalayalam).to.equal('കന്നി');
      expect(BaseDate.getMasaName(2).mlMalayalam).to.equal('തുലാം');
      expect(BaseDate.getMasaName(3).mlMalayalam).to.equal('വൃശ്ചികം');
      expect(BaseDate.getMasaName(4).mlMalayalam).to.equal('ധനു');
      expect(BaseDate.getMasaName(5).mlMalayalam).to.equal('മകരം');
      expect(BaseDate.getMasaName(6).mlMalayalam).to.equal('കുംഭം');
      expect(BaseDate.getMasaName(7).mlMalayalam).to.equal('മീനം');
      expect(BaseDate.getMasaName(8).mlMalayalam).to.equal('മേടം');
      expect(BaseDate.getMasaName(9).mlMalayalam).to.equal('ഇടവം');
      expect(BaseDate.getMasaName(10).mlMalayalam).to.equal('മിഥുനം');
      expect(BaseDate.getMasaName(11).mlMalayalam).to.equal('കർക്കടകം');

    });

  });

});
