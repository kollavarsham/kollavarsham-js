import {expect} from 'chai';

import Calculations from '../../lib/calculations.js';

describe('Calculations', function () {

  describe('toGregorian', function () {

    let calculations;

    beforeEach(function () {
      calculations = new Calculations();
    });

    it('should throw appropriate exception', function () {
      expect(function () {
        calculations.toGregorian({});
      }).to.throw('Not implemented');
    });

  });

});
