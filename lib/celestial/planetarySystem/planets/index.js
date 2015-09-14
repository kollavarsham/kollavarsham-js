/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
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

class Star extends Planet {
  constructor() {
    super();
    this.name = 'star';
  }
}

class Sun extends Planet {
  constructor() {
    super();
    this.name = 'sun';
  }
}

class Moon extends Planet {
  constructor() {
    super();
    this.name = 'moon';
  }
}

class Mercury extends Planet {
  constructor() {
    super();
    this.name = 'mercury';
  }
}

class Venus extends Planet {
  constructor() {
    super();
    this.name = 'venus';
  }
}

class Mars extends Planet {
  constructor() {
    super();
    this.name = 'mars';
  }
}

class Jupiter extends Planet {
  constructor() {
    super();
    this.name = 'jupiter';
  }
}

class Saturn extends Planet {
  constructor() {
    super();
    this.name = 'saturn';
  }
}

class Candrocca extends Planet {
  constructor() {
    super();
    this.name = 'candrocca';
  }
}

class Rahu extends Planet {
  constructor() {
    super();
    this.name = 'rahu';
  }
}

export default {Planet, Star, Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, Candrocca, Rahu};
