/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2024 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module planetarySystem
 */
import { Planet, Star, Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Candrocca, Rahu } from './planets/index';
import { Yuga } from './yuga';

export interface PlanetList {
  [key: string]: Planet;
}

let star: Star;
let sun: Sun;
let moon: Moon;
let mercury: Mercury;
let venus: Venus;
let mars: Mars;
let jupiter: Jupiter;
let saturn: Saturn;
let candrocca: Candrocca; // Moon Apogee
let rahu: Rahu; // Moon Node

let _yuga: Yuga; // eslint-disable-line no-underscore-dangle

let planetsList: PlanetList;

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class PlanetarySystem
 */
export class PlanetarySystem {
  system: string;

  constructor(system = 'SuryaSiddhanta') {

    this.system = system === 'InPancasiddhantika' ? system : 'SuryaSiddhanta';

    star = new Star();
    sun = new Sun();
    moon = new Moon();
    mercury = new Mercury();
    venus = new Venus();
    mars = new Mars();
    jupiter = new Jupiter();
    saturn = new Saturn();
    candrocca = new Candrocca(); // Moon Apogee
    rahu = new Rahu(); // Moon Node

    _yuga = new Yuga();

    this.initializeYugaRotations();

    this.initializeYuga();

    PlanetarySystem.initializePlanetaryConstants();

    planetsList = [star, sun, moon, mercury, venus, mars, jupiter, saturn, candrocca, rahu]
      .reduce((list, planet) => ({ ...list, [planet.name] : planet }), {});

  }

  get yuga(): Yuga {
    return _yuga;
  }

  get planets(): PlanetList {
    return planetsList;
  }

  initializeYugaRotations(): void {
    // common values across the systems
    sun.YugaRotation = 4320000;
    moon.YugaRotation = 57753336;
    jupiter.YugaRotation = 364220;

    const isSuryaSiddhantaSystem = this.system === 'SuryaSiddhanta';

    // # Saura, HIL, p.15 && # Latadeva/Ardharatrika, HIL, p.15
    star.YugaRotation = isSuryaSiddhantaSystem ? 1582237800 : 1582237828;
    mercury.YugaRotation = isSuryaSiddhantaSystem ? 17937000 : 17937060;
    venus.YugaRotation = isSuryaSiddhantaSystem ? 7022388 : 7022376;
    mars.YugaRotation = isSuryaSiddhantaSystem ? 2296824 : 2296832;
    saturn.YugaRotation = isSuryaSiddhantaSystem ? 146564 : 146568;
    candrocca.YugaRotation = isSuryaSiddhantaSystem ? 488219 : 488203;
    rahu.YugaRotation = isSuryaSiddhantaSystem ? -232226 : -232238;
  }

  initializeYuga(): void {
    this.yuga.CivilDays = star.YugaRotation - sun.YugaRotation;
    this.yuga.SynodicMonth = moon.YugaRotation - sun.YugaRotation;

    this.yuga.Adhimasa = this.yuga.SynodicMonth - 12 * sun.YugaRotation;

    this.yuga.Tithi = 30 * this.yuga.SynodicMonth;
    this.yuga.Ksayadina = this.yuga.Tithi - this.yuga.CivilDays;
  }

  static initializePlanetaryConstants(): void {
    // star
    star.Rotation = 0;
    star.Sighra = 0;
    star.Apogee = 0;
    star.MandaCircumference = 0;
    star.SighraCircumference = 0;

    // sun
    sun.Rotation = sun.YugaRotation;
    sun.Sighra = sun.YugaRotation;
    sun.Apogee = 77 + 17 / 60;
    sun.MandaCircumference = 13 + 50 / 60;
    sun.SighraCircumference = 0;

    // moon
    moon.Rotation = moon.YugaRotation;
    moon.Sighra = 0;
    moon.Apogee = 0;
    moon.MandaCircumference = 31 + 50 / 60;
    moon.SighraCircumference = 0;

    // mercury
    mercury.Rotation = sun.YugaRotation;
    mercury.Sighra = mercury.YugaRotation;
    mercury.Apogee = 220 + 27 / 60;
    mercury.MandaCircumference = 29;
    mercury.SighraCircumference = 131.5;

    // venus
    venus.Rotation = sun.YugaRotation;
    venus.Sighra = venus.YugaRotation;
    venus.Apogee = 79 + 50 / 60;
    venus.MandaCircumference = 11.5;
    venus.SighraCircumference = 261;

    // mars
    mars.Rotation = mars.YugaRotation;
    mars.Sighra = sun.YugaRotation;
    mars.Apogee = 130 + 2 / 60;
    mars.MandaCircumference = 73.5;
    mars.SighraCircumference = 233.5;

    // jupiter
    jupiter.Rotation = jupiter.YugaRotation;
    jupiter.Sighra = sun.YugaRotation;
    jupiter.Apogee = 171 + 18 / 60;
    jupiter.MandaCircumference = 32.5;
    jupiter.SighraCircumference = 71;

    // saturn
    saturn.Rotation = saturn.YugaRotation;
    saturn.Sighra = sun.YugaRotation;
    saturn.Apogee = 236 + 37 / 60;
    saturn.MandaCircumference = 48.5;
    saturn.SighraCircumference = 39.5;

    // Candrocca
    candrocca.Rotation = candrocca.YugaRotation;
    candrocca.Sighra = 0;
    candrocca.Apogee = 0;
    candrocca.MandaCircumference = 0;
    candrocca.SighraCircumference = 0;

    // Rahu
    rahu.Rotation = rahu.YugaRotation;
    rahu.Sighra = 0;
    rahu.Apogee = 0;
    rahu.MandaCircumference = 0;
    rahu.SighraCircumference = 0;
  }

}
