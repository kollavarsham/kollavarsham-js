/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2024 The Kollavarsham Team
 * Licensed under the MIT license.
 */

/**
 * @module planets
 */

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Planet
 * @constructor
 */
class Planet {
  name: string;
  YugaRotation: number;
  Rotation: number;
  Sighra: number;
  MeanPosition: number;
  Apogee: number;
  MandaCircumference: number;
  SighraCircumference: number;

  constructor() {
    /**
     * Name of the planet subclass
     *
     * @property name
     * @type {string}
     */
    this.name = '';
    /**
     * **TODO: Description**
     *
     * @property YugaRotation
     * @type {Number}
     */
    this.YugaRotation = 0; // sidereal rotations
    /**
     * **TODO: Description**
     *
     * @property Rotation
     * @type {Number}
     */
    this.Rotation = 0;
    /**
     * **TODO: Description**
     *
     * @property Sighra
     * @type {Number}
     */
    this.Sighra = 0;
    /**
     * **TODO: Description**
     *
     * @property MeanPosition
     * @type {Number}
     */
    this.MeanPosition = 0;
    /**
     * **TODO: Description**
     *
     * @property Apogee
     * @type {Number}
     */
    this.Apogee = 0;
    /**
     * **TODO: Description**
     *
     * @property MandaCircumference
     * @type {Number}
     */
    this.MandaCircumference = 0;
    /**
     * **TODO: Description**
     *
     * @property SighraCircumference
     * @type {Number}
     */
    this.SighraCircumference = 0;
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Star
 * @extends Planet
 */
class Star extends Planet {
  constructor() {
    super();
    this.name = 'star';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Sun
 * @extends Planet
 */
class Sun extends Planet {
  constructor() {
    super();
    this.name = 'sun';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Moon
 * @extends Planet
 */
class Moon extends Planet {
  constructor() {
    super();
    this.name = 'moon';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Mercury
 * @extends Planet
 */
class Mercury extends Planet {
  constructor() {
    super();
    this.name = 'mercury';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Venus
 * @extends Planet
 */
class Venus extends Planet {
  constructor() {
    super();
    this.name = 'venus';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Mars
 * @extends Planet
 */
class Mars extends Planet {
  constructor() {
    super();
    this.name = 'mars';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Jupiter
 * @extends Planet
 */
class Jupiter extends Planet {
  constructor() {
    super();
    this.name = 'jupiter';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Saturn
 * @extends Planet
 */
class Saturn extends Planet {
  constructor() {
    super();
    this.name = 'saturn';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Candrocca
 * @extends Planet
 */
class Candrocca extends Planet {
  constructor() {
    super();
    this.name = 'candrocca';
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Rahu
 * @extends Planet
 */
class Rahu extends Planet {
  constructor() {
    super();
    this.name = 'rahu';
  }
}

export { Planet, Star, Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Candrocca, Rahu };
