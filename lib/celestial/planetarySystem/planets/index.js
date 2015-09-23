/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
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
 */
class Planet {
  constructor() {
    this.name = null;
    this.YugaRotation = 0;  // sidereal rotations
    this.Rotation = 0;
    this.Sighra = 0;
    this.MeanPosition = 0;
    this.TruePosition = 0;
    this.Apogee = 0;
    this.MandaCircumference = 0;
    this.SighraCircumference = 0;
  }
}

/**
 *
 *  **INTERNAL/PRIVATE**
 *
 * @class Star
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
 */
class Rahu extends Planet {
  constructor() {
    super();
    this.name = 'rahu';
  }
}

export default {Planet, Star, Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Candrocca, Rahu};
