import {expect} from 'chai';

import { PlanetarySystem } from '../../../../lib/celestial/planetarySystem';

describe('PlanetarySystem', function () {

  let planetarySystem;
  let planets;
  let yuga;

  describe('empty constructor', function () {

    beforeEach(function () {
      planetarySystem = new PlanetarySystem();
      planets = planetarySystem.planets;
      yuga = planetarySystem.yuga;
    });

    it('should set the YugaRotation values correctly', function () {
      expect(planets.star.YugaRotation).to.equal(1582237800);
      expect(planets.sun.YugaRotation).to.equal(4320000);
      expect(planets.moon.YugaRotation).to.equal(57753336);
      expect(planets.mercury.YugaRotation).to.equal(17937000);
      expect(planets.venus.YugaRotation).to.equal(7022388);
      expect(planets.mars.YugaRotation).to.equal(2296824);
      expect(planets.jupiter.YugaRotation).to.equal(364220);
      expect(planets.saturn.YugaRotation).to.equal(146564);
      expect(planets.candrocca.YugaRotation).to.equal(488219);
      expect(planets.rahu.YugaRotation).to.equal(-232226);
    });

  });

  describe('constructor with system as SuryaSiddhanta', function () {
    beforeEach(function () {
      planetarySystem = new PlanetarySystem('SuryaSiddhanta');
      planets = planetarySystem.planets;
      yuga = planetarySystem.yuga;
    });

    it('should set up the planetary constants correctly', function () {
      expect(planets.star.YugaRotation).to.equal(1582237800);
      expect(planets.sun.YugaRotation).to.equal(4320000);
      expect(planets.moon.YugaRotation).to.equal(57753336);
      expect(planets.mercury.YugaRotation).to.equal(17937000);
      expect(planets.venus.YugaRotation).to.equal(7022388);
      expect(planets.mars.YugaRotation).to.equal(2296824);
      expect(planets.jupiter.YugaRotation).to.equal(364220);
      expect(planets.saturn.YugaRotation).to.equal(146564);
      expect(planets.candrocca.YugaRotation).to.equal(488219);
      expect(planets.rahu.YugaRotation).to.equal(-232226);

      expect(planets.star.Rotation).to.equal(0);
      expect(planets.sun.Rotation).to.equal(4320000);
      expect(planets.moon.Rotation).to.equal(57753336);
      expect(planets.mercury.Rotation).to.equal(4320000);
      expect(planets.venus.Rotation).to.equal(4320000);
      expect(planets.mars.Rotation).to.equal(2296824);
      expect(planets.jupiter.Rotation).to.equal(364220);
      expect(planets.saturn.Rotation).to.equal(146564);
      expect(planets.candrocca.Rotation).to.equal(488219);
      expect(planets.rahu.Rotation).to.equal(-232226);

      expect(planets.star.Sighra).to.equal(0);
      expect(planets.sun.Sighra).to.equal(4320000);
      expect(planets.moon.Sighra).to.equal(0);
      expect(planets.mercury.Sighra).to.equal(17937000);
      expect(planets.venus.Sighra).to.equal(7022388);
      expect(planets.mars.Sighra).to.equal(4320000);
      expect(planets.jupiter.Sighra).to.equal(4320000);
      expect(planets.saturn.Sighra).to.equal(4320000);
      expect(planets.candrocca.Sighra).to.equal(0);
      expect(planets.rahu.Sighra).to.equal(0);

      expect(planets.star.Apogee).to.equal(0);
      expect(planets.sun.Apogee).to.equal(77.28333333333333);
      expect(planets.moon.Apogee).to.equal(0);
      expect(planets.mercury.Apogee).to.equal(220.45);
      expect(planets.venus.Apogee).to.equal(79.83333333333333);
      expect(planets.mars.Apogee).to.equal(130.03333333333333);
      expect(planets.jupiter.Apogee).to.equal(171.3);
      expect(planets.saturn.Apogee).to.equal(236.61666666666667);
      expect(planets.candrocca.Apogee).to.equal(0);
      expect(planets.rahu.Apogee).to.equal(0);

      expect(planets.star.MandaCircumference).to.equal(0);
      expect(planets.sun.MandaCircumference).to.equal(13.833333333333334);
      expect(planets.moon.MandaCircumference).to.equal(31.833333333333332);
      expect(planets.mercury.MandaCircumference).to.equal(29);
      expect(planets.venus.MandaCircumference).to.equal(11.5);
      expect(planets.mars.MandaCircumference).to.equal(73.5);
      expect(planets.jupiter.MandaCircumference).to.equal(32.5);
      expect(planets.saturn.MandaCircumference).to.equal(48.5);
      expect(planets.candrocca.MandaCircumference).to.equal(0);
      expect(planets.rahu.MandaCircumference).to.equal(0);

      expect(planets.star.SighraCircumference).to.equal(0);
      expect(planets.sun.SighraCircumference).to.equal(0);
      expect(planets.moon.SighraCircumference).to.equal(0);
      expect(planets.mercury.SighraCircumference).to.equal(131.5);
      expect(planets.venus.SighraCircumference).to.equal(261);
      expect(planets.mars.SighraCircumference).to.equal(233.5);
      expect(planets.jupiter.SighraCircumference).to.equal(71);
      expect(planets.saturn.SighraCircumference).to.equal(39.5);
      expect(planets.candrocca.SighraCircumference).to.equal(0);
      expect(planets.rahu.SighraCircumference).to.equal(0);

      expect(yuga.CivilDays).to.equal(1577917800);
      expect(yuga.SynodicMonth).to.equal(53433336);
      expect(yuga.Adhimasa).to.equal(1593336);
      expect(yuga.Tithi).to.equal(1603000080);
      expect(yuga.Ksayadina).to.equal(25082280);
    });
  });

  describe('constructor with system as InPancasiddhantika', function () {
    beforeEach(function () {
      planetarySystem = new PlanetarySystem('InPancasiddhantika');
      planets = planetarySystem.planets;
      yuga = planetarySystem.yuga;
    });

    it('should set up the planetary constants correctly', function () {
      expect(planets.star.YugaRotation).to.equal(1582237828);
      expect(planets.sun.YugaRotation).to.equal(4320000);
      expect(planets.moon.YugaRotation).to.equal(57753336);
      expect(planets.mercury.YugaRotation).to.equal(17937060);
      expect(planets.venus.YugaRotation).to.equal(7022376);
      expect(planets.mars.YugaRotation).to.equal(2296832);
      expect(planets.jupiter.YugaRotation).to.equal(364220);
      expect(planets.saturn.YugaRotation).to.equal(146568);
      expect(planets.candrocca.YugaRotation).to.equal(488203);
      expect(planets.rahu.YugaRotation).to.equal(-232238);

      expect(planets.star.Rotation).to.equal(0);
      expect(planets.sun.Rotation).to.equal(4320000);
      expect(planets.moon.Rotation).to.equal(57753336);
      expect(planets.mercury.Rotation).to.equal(4320000);
      expect(planets.venus.Rotation).to.equal(4320000);
      expect(planets.mars.Rotation).to.equal(2296832);
      expect(planets.jupiter.Rotation).to.equal(364220);
      expect(planets.saturn.Rotation).to.equal(146568);
      expect(planets.candrocca.Rotation).to.equal(488203);
      expect(planets.rahu.Rotation).to.equal(-232238);

      expect(planets.star.Sighra).to.equal(0);
      expect(planets.sun.Sighra).to.equal(4320000);
      expect(planets.moon.Sighra).to.equal(0);
      expect(planets.mercury.Sighra).to.equal(17937060);
      expect(planets.venus.Sighra).to.equal(7022376);
      expect(planets.mars.Sighra).to.equal(4320000);
      expect(planets.jupiter.Sighra).to.equal(4320000);
      expect(planets.saturn.Sighra).to.equal(4320000);
      expect(planets.candrocca.Sighra).to.equal(0);
      expect(planets.rahu.Sighra).to.equal(0);

      expect(planets.star.Apogee).to.equal(0);
      expect(planets.sun.Apogee).to.equal(77.28333333333333);
      expect(planets.moon.Apogee).to.equal(0);
      expect(planets.mercury.Apogee).to.equal(220.45);
      expect(planets.venus.Apogee).to.equal(79.83333333333333);
      expect(planets.mars.Apogee).to.equal(130.03333333333333);
      expect(planets.jupiter.Apogee).to.equal(171.3);
      expect(planets.saturn.Apogee).to.equal(236.61666666666667);
      expect(planets.candrocca.Apogee).to.equal(0);
      expect(planets.rahu.Apogee).to.equal(0);

      expect(planets.star.MandaCircumference).to.equal(0);
      expect(planets.sun.MandaCircumference).to.equal(13.833333333333334);
      expect(planets.moon.MandaCircumference).to.equal(31.833333333333332);
      expect(planets.mercury.MandaCircumference).to.equal(29);
      expect(planets.venus.MandaCircumference).to.equal(11.5);
      expect(planets.mars.MandaCircumference).to.equal(73.5);
      expect(planets.jupiter.MandaCircumference).to.equal(32.5);
      expect(planets.saturn.MandaCircumference).to.equal(48.5);
      expect(planets.candrocca.MandaCircumference).to.equal(0);
      expect(planets.rahu.MandaCircumference).to.equal(0);

      expect(planets.star.SighraCircumference).to.equal(0);
      expect(planets.sun.SighraCircumference).to.equal(0);
      expect(planets.moon.SighraCircumference).to.equal(0);
      expect(planets.mercury.SighraCircumference).to.equal(131.5);
      expect(planets.venus.SighraCircumference).to.equal(261);
      expect(planets.mars.SighraCircumference).to.equal(233.5);
      expect(planets.jupiter.SighraCircumference).to.equal(71);
      expect(planets.saturn.SighraCircumference).to.equal(39.5);
      expect(planets.candrocca.SighraCircumference).to.equal(0);
      expect(planets.rahu.SighraCircumference).to.equal(0);

      expect(yuga.CivilDays).to.equal(1577917828);
      expect(yuga.SynodicMonth).to.equal(53433336);
      expect(yuga.Adhimasa).to.equal(1593336);
      expect(yuga.Tithi).to.equal(1603000080);
      expect(yuga.Ksayadina).to.equal(25082252);
    });

  });

});
