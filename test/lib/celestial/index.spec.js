import {expect} from 'chai';

import Celestial from '../../../lib/celestial/index.js';
import MathHelper from '../../../lib/mathHelper.js';

describe('Celestial', function () {

  let celestial;

  beforeEach(function () {
    celestial = new Celestial();
  });

  describe('threeRelation', function () {

    it('should return correct results', function () {
      expect(Celestial.threeRelation(-1, 1, 3)).to.equal(1);
      expect(Celestial.threeRelation(1, -1, -3)).to.equal(-1);
      expect(Celestial.threeRelation(1, 1, 1)).to.equal(0);
      expect(Celestial.threeRelation(1, 5, -3)).to.equal(0); //invalid scenario

    });

  });

  describe('getTithi', function () {

    it('should return correct results', function () {

      expect(Celestial.getTithi(294.989551683806, 37.5275236212135)).to.be.closeTo(8.54483099478396, MathHelper.epsilon);
      expect(Celestial.getTithi(333.593757395798, 45.9229472947752)).to.be.closeTo(6.02743249158144, MathHelper.epsilon);
      expect(Celestial.getTithi(15.597297524597, 123.3068304585275)).to.be.closeTo(8.97579441116087, MathHelper.epsilon);
      expect(Celestial.getTithi(163.989551683806, 15.5275236212135)).to.be.closeTo(17.6281643281173, MathHelper.epsilon);
      expect(Celestial.getTithi(3.593757395798, 245.9229472947752)).to.be.closeTo(20.1940991582481, MathHelper.epsilon);
      expect(Celestial.getTithi(56.597297524597, 302.3068304585275)).to.be.closeTo(20.4757944111609, MathHelper.epsilon);

    });

  });

  describe('getMandaEquation', function () {

    it('should return correct results', function () {

      expect(celestial.getMandaEquation(216.448410870245, 'sun')).to.be.closeTo(-1.30810722363905, MathHelper.epsilon);
      expect(celestial.getMandaEquation(-72.3184309200178, 'moon')).to.be.closeTo(-4.83281883352571, MathHelper.epsilon);
      expect(celestial.getMandaEquation(150.807334962742, 'moon')).to.be.closeTo(2.47190852495064, MathHelper.epsilon);
      expect(celestial.getMandaEquation(206.122810882618, 'sun')).to.be.closeTo(-0.969422483995786, MathHelper.epsilon);
      expect(celestial.getMandaEquation(203.067198238109, 'moon')).to.be.closeTo(-1.98547851952987, MathHelper.epsilon);
      expect(celestial.getMandaEquation(210.065221570941, 'sun')).to.be.closeTo(-1.10305954670912, MathHelper.epsilon);
      expect(celestial.getMandaEquation(176.937266597806, 'moon')).to.be.closeTo(0.270697085906033, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.094016226779, 'sun')).to.be.closeTo(-1.03685394627977, MathHelper.epsilon);
      expect(celestial.getMandaEquation(163.872300782873, 'moon')).to.be.closeTo(1.40749058746745, MathHelper.epsilon);
      expect(celestial.getMandaEquation(207.108413554698, 'sun')).to.be.closeTo(-1.00328649380511, MathHelper.epsilon);
      expect(celestial.getMandaEquation(190.002232417937, 'moon')).to.be.closeTo(-0.880005747995446, MathHelper.epsilon);
      expect(celestial.getMandaEquation(209.07961889886, 'sun')).to.be.closeTo(-1.07011491083048, MathHelper.epsilon);
      expect(celestial.getMandaEquation(176.937266597806, 'moon')).to.be.closeTo(0.270697085906033, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.094016226779, 'sun')).to.be.closeTo(-1.03685394627977, MathHelper.epsilon);
      expect(celestial.getMandaEquation(170.404783692979, 'moon')).to.be.closeTo(0.844536073585857, MathHelper.epsilon);
      expect(celestial.getMandaEquation(207.601214890739, 'sun')).to.be.closeTo(-1.02010791244252, MathHelper.epsilon);
      expect(celestial.getMandaEquation(183.469749507872, 'moon')).to.be.closeTo(-0.306629778128034, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.58681756282, 'sun')).to.be.closeTo(-1.05352335673225, MathHelper.epsilon);
      expect(celestial.getMandaEquation(176.937266597806, 'moon')).to.be.closeTo(0.270697085906033, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.094016226779, 'sun')).to.be.closeTo(-1.03685394627977, MathHelper.epsilon);
      expect(celestial.getMandaEquation(190.002232417937, 'moon')).to.be.closeTo(-0.880005747995446, MathHelper.epsilon);
      expect(celestial.getMandaEquation(209.07961889886, 'sun')).to.be.closeTo(-1.07011491083048, MathHelper.epsilon);
      expect(celestial.getMandaEquation(183.469749507872, 'moon')).to.be.closeTo(-0.306629778128034, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.58681756282, 'sun')).to.be.closeTo(-1.05352335673225, MathHelper.epsilon);
      expect(celestial.getMandaEquation(180.203508055438, 'moon')).to.be.closeTo(-0.0179953506933944, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.340416894636, 'sun')).to.be.closeTo(-1.04519830661684, MathHelper.epsilon);
      expect(celestial.getMandaEquation(186.735990965544, 'moon')).to.be.closeTo(-0.594275735600709, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.833218230676, 'sun')).to.be.closeTo(-1.06182894265887, MathHelper.epsilon);
      expect(celestial.getMandaEquation(183.469749507872, 'moon')).to.be.closeTo(-0.306629778128034, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.58681756282, 'sun')).to.be.closeTo(-1.05352335673225, MathHelper.epsilon);
      expect(celestial.getMandaEquation(176.937266597806, 'moon')).to.be.closeTo(0.270697085906033, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.094016226779, 'sun')).to.be.closeTo(-1.03685394627977, MathHelper.epsilon);
      expect(celestial.getMandaEquation(180.203508055438, 'moon')).to.be.closeTo(-0.0179953506933944, MathHelper.epsilon);
      expect(celestial.getMandaEquation(208.340416894636, 'sun')).to.be.closeTo(-1.04519830661684, MathHelper.epsilon);
      expect(celestial.getMandaEquation(83.931123946793, 'mercury')).to.be.closeTo(4.59454849262788, MathHelper.epsilon);
      expect(celestial.getMandaEquation(81.6338497004791, 'mercury')).to.be.closeTo(4.57122541974445, MathHelper.epsilon);
      expect(celestial.getMandaEquation(191.523444971968, 'venus')).to.be.closeTo(-0.365635863559596, MathHelper.epsilon);
      expect(celestial.getMandaEquation(191.706262903748, 'venus')).to.be.closeTo(-0.37135641118768, MathHelper.epsilon);
      expect(celestial.getMandaEquation(34.7045977141798, 'mars')).to.be.closeTo(6.67523064837691, MathHelper.epsilon);
      expect(celestial.getMandaEquation(31.3669823899913, 'mars')).to.be.closeTo(6.10047750894678, MathHelper.epsilon);
      expect(celestial.getMandaEquation(-91.5542432559879, 'jupiter')).to.be.closeTo(-5.17767683561233, MathHelper.epsilon);
      expect(celestial.getMandaEquation(-88.9654048381817, 'jupiter')).to.be.closeTo(-5.17874093000353, MathHelper.epsilon);
      expect(celestial.getMandaEquation(-42.8326673204595, 'saturn')).to.be.closeTo(-5.25521105975762, MathHelper.epsilon);
      expect(celestial.getMandaEquation(-40.2050617905807, 'saturn')).to.be.closeTo(-4.98912071710793, MathHelper.epsilon);

    });

  });

  describe('declination', function () {

    it('should return correct results', function () {

      expect(Celestial.declination(31.3101877453024)).to.be.closeTo(12.2026059914001, MathHelper.epsilon);
      expect(Celestial.declination(42.2597957259723)).to.be.closeTo(15.8742931864835, MathHelper.epsilon);
      expect(Celestial.declination(59.2349729472294)).to.be.closeTo(20.4565845497204, MathHelper.epsilon);
      expect(Celestial.declination(62.5975972349908)).to.be.closeTo(21.1677169773821, MathHelper.epsilon);
      expect(Celestial.declination(80.4818781723799)).to.be.closeTo(23.6492922420057, MathHelper.epsilon);
      expect(Celestial.declination(121.1497130809087)).to.be.closeTo(20.3707052985127, MathHelper.epsilon);
      expect(Celestial.declination(320.8687779979979)).to.be.closeTo(-14.8738036439391, MathHelper.epsilon);

    });

  });

  describe('getTrueLunarLongitude', function () {

    it('should return correct results', function () {

      expect(celestial.getTrueLunarLongitude(2299158.5)).to.be.closeTo(167.084587116821, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2299159.5)).to.be.closeTo(179.618866280373, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2299160.5)).to.be.closeTo(191.953219840454, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2299161.5)).to.be.closeTo(204.131519861513, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2361220.5)).to.be.closeTo(349.195739637822, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2361221.5)).to.be.closeTo(1.82309136307406, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2361222.5)).to.be.closeTo(14.6945040053245, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(1721457.5)).to.be.closeTo(6.55724149356419, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2456656.5)).to.be.closeTo(16.24829446685, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2456657.5)).to.be.closeTo(29.8253740270552, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2455957.5)).to.be.closeTo(156.709071062542, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2456351.5)).to.be.closeTo(316.081404838166, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2455985.5)).to.be.closeTo(165.854323537076, MathHelper.epsilon);
      expect(celestial.getTrueLunarLongitude(2433313.5)).to.be.closeTo(236.806759936797, MathHelper.epsilon);

    });

  });

  describe('getTrueSolarLongitude', function () {

    it('should return correct results', function () {

      expect(celestial.getTrueSolarLongitude(2299158.5)).to.be.closeTo(215.330481398828, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2299159.5)).to.be.closeTo(216.345092245966, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2299160.5)).to.be.closeTo(217.360117559963, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2299161.5)).to.be.closeTo(218.375548627069, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2361220.5)).to.be.closeTo(183.139229101953, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2361221.5)).to.be.closeTo(184.136821438217, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2361222.5)).to.be.closeTo(185.135030298228, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(1721457.5)).to.be.closeTo(355.302664567532, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2456656.5)).to.be.closeTo(288.309252298232, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2456657.5)).to.be.closeTo(289.32751969395, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2455957.5)).to.be.closeTo(320.200309773426, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2456351.5)).to.be.closeTo(348.803993428264, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2455985.5)).to.be.closeTo(348.072902270539, MathHelper.epsilon);
      expect(celestial.getTrueSolarLongitude(2433313.5)).to.be.closeTo(322.249740952942, MathHelper.epsilon);

    });

  });

  describe('getMeanLongitude', function () {

    it('should return correct results', function () {

      expect(celestial.getMeanLongitude(1868236.15634155, 4320000)).to.be.closeTo(298.54776362783, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15637207, 4320000)).to.be.closeTo(298.547793708385, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15635681, 4320000)).to.be.closeTo(298.547778668108, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15635681, 4320000)).to.be.closeTo(298.547778668108, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15637207, 4320000)).to.be.closeTo(298.547793708385, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636444, 4320000)).to.be.closeTo(298.547786188246, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15635681, 4320000)).to.be.closeTo(298.547778668108, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636444, 4320000)).to.be.closeTo(298.547786188246, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636063, 4320000)).to.be.closeTo(298.547782433088, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636063, 4320000)).to.be.closeTo(298.547782433088, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636444, 4320000)).to.be.closeTo(298.547786188246, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636253, 4320000)).to.be.closeTo(298.54778430592, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636063, 4320000)).to.be.closeTo(298.547782433088, MathHelper.epsilon);
      expect(celestial.getMeanLongitude(1868236.15636253, 4320000)).to.be.closeTo(298.54778430592, MathHelper.epsilon);

    });

  });

  describe('getEclipticLongitude', function () {

    it('should return correct results', function () {

      expect(celestial.getEclipticLongitude(1710693)).to.be.closeTo(168.08719102714, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710694)).to.be.closeTo(154.755365716082, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710695)).to.be.closeTo(141.463254728984, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710696)).to.be.closeTo(128.268162836368, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772755)).to.be.closeTo(59.276089124806, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772756)).to.be.closeTo(70.8982212421655, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772757)).to.be.closeTo(82.3090362371512, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1132992)).to.be.closeTo(95.3516217819625, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868191)).to.be.closeTo(35.3086446106693, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868192)).to.be.closeTo(22.4428920586289, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867492)).to.be.closeTo(87.4807549325996, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867886)).to.be.closeTo(156.157101234428, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867520)).to.be.closeTo(67.5269642534404, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1844848)).to.be.closeTo(154.486799638547, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710693)).to.be.closeTo(168.08719102714, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710694)).to.be.closeTo(154.755365716082, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710695)).to.be.closeTo(141.463254728984, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710696)).to.be.closeTo(128.268162836368, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772755)).to.be.closeTo(59.276089124806, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772756)).to.be.closeTo(70.8982212421655, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772757)).to.be.closeTo(82.3090362371512, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1132992)).to.be.closeTo(95.3516217819625, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868191)).to.be.closeTo(35.3086446106693, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868192)).to.be.closeTo(22.4428920586289, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867492)).to.be.closeTo(87.4807549325996, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867886)).to.be.closeTo(156.157101234428, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867520)).to.be.closeTo(67.5269642534404, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1844848)).to.be.closeTo(154.486799638547, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710693)).to.be.closeTo(168.08719102714, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710694)).to.be.closeTo(154.755365716082, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710695)).to.be.closeTo(141.463254728984, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710696)).to.be.closeTo(128.268162836368, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772755)).to.be.closeTo(59.276089124806, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772756)).to.be.closeTo(70.8982212421655, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772757)).to.be.closeTo(82.3090362371512, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1132992)).to.be.closeTo(95.3516217819625, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868191)).to.be.closeTo(35.3086446106693, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868192)).to.be.closeTo(22.4428920586289, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867492)).to.be.closeTo(87.4807549325996, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867886)).to.be.closeTo(156.157101234428, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867520)).to.be.closeTo(67.5269642534404, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1844848)).to.be.closeTo(154.486799638547, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710693)).to.be.closeTo(168.08719102714, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710694)).to.be.closeTo(154.755365716082, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710695)).to.be.closeTo(141.463254728984, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710696)).to.be.closeTo(128.268162836368, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772755)).to.be.closeTo(59.276089124806, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772756)).to.be.closeTo(70.8982212421655, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772757)).to.be.closeTo(82.3090362371512, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1132992)).to.be.closeTo(95.3516217819625, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868191)).to.be.closeTo(35.3086446106693, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868192)).to.be.closeTo(22.4428920586289, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867492)).to.be.closeTo(87.4807549325996, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867886)).to.be.closeTo(156.157101234428, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867520)).to.be.closeTo(67.5269642534404, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1844848)).to.be.closeTo(154.486799638547, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710693)).to.be.closeTo(168.08719102714, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710694)).to.be.closeTo(154.755365716082, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710695)).to.be.closeTo(141.463254728984, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1710696)).to.be.closeTo(128.268162836368, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772755)).to.be.closeTo(59.276089124806, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772756)).to.be.closeTo(70.8982212421655, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1772757)).to.be.closeTo(82.3090362371512, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1132992)).to.be.closeTo(95.3516217819625, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868191)).to.be.closeTo(35.3086446106693, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1868192)).to.be.closeTo(22.4428920586289, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867492)).to.be.closeTo(87.4807549325996, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867886)).to.be.closeTo(156.157101234428, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1867520)).to.be.closeTo(67.5269642534404, MathHelper.epsilon);
      expect(celestial.getEclipticLongitude(1844848)).to.be.closeTo(154.486799638547, MathHelper.epsilon);

    });

  });

  describe('getConjunction', function () {

    it('should return correct results', function () {

      expect(celestial.getConjunction(1710693)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710694)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710695)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710696)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1772755)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772756)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772757)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1132992)).to.be.closeTo(330.403978010768, MathHelper.epsilon);
      expect(celestial.getConjunction(1868191)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1868192)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1867492)).to.be.closeTo(278.46912256809, MathHelper.epsilon);
      expect(celestial.getConjunction(1867886)).to.be.closeTo(327.315683844566, MathHelper.epsilon);
      expect(celestial.getConjunction(1867520)).to.be.closeTo(308.537344813799, MathHelper.epsilon);
      expect(celestial.getConjunction(1844848)).to.be.closeTo(274.457623345507, MathHelper.epsilon);
      expect(celestial.getConjunction(1710693)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710694)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710695)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710696)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1772755)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772756)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772757)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1132992)).to.be.closeTo(330.403978010768, MathHelper.epsilon);
      expect(celestial.getConjunction(1868191)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1868192)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1867492)).to.be.closeTo(278.46912256809, MathHelper.epsilon);
      expect(celestial.getConjunction(1867886)).to.be.closeTo(327.315683844566, MathHelper.epsilon);
      expect(celestial.getConjunction(1867520)).to.be.closeTo(308.537344813799, MathHelper.epsilon);
      expect(celestial.getConjunction(1844848)).to.be.closeTo(274.457623345507, MathHelper.epsilon);
      expect(celestial.getConjunction(1710693)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710694)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710695)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710696)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1772755)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772756)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772757)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1132992)).to.be.closeTo(330.403978010768, MathHelper.epsilon);
      expect(celestial.getConjunction(1868191)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1868192)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1867492)).to.be.closeTo(278.46912256809, MathHelper.epsilon);
      expect(celestial.getConjunction(1867886)).to.be.closeTo(327.315683844566, MathHelper.epsilon);
      expect(celestial.getConjunction(1867520)).to.be.closeTo(308.537344813799, MathHelper.epsilon);
      expect(celestial.getConjunction(1844848)).to.be.closeTo(274.457623345507, MathHelper.epsilon);
      expect(celestial.getConjunction(1710693)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710694)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710695)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710696)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1772755)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772756)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772757)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1132992)).to.be.closeTo(330.403978010768, MathHelper.epsilon);
      expect(celestial.getConjunction(1868191)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1868192)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1867492)).to.be.closeTo(278.46912256809, MathHelper.epsilon);
      expect(celestial.getConjunction(1867886)).to.be.closeTo(327.315683844566, MathHelper.epsilon);
      expect(celestial.getConjunction(1867520)).to.be.closeTo(308.537344813799, MathHelper.epsilon);
      expect(celestial.getConjunction(1844848)).to.be.closeTo(274.457623345507, MathHelper.epsilon);
      expect(celestial.getConjunction(1710693)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710694)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710695)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1710696)).to.be.closeTo(195.220929584348, MathHelper.epsilon);
      expect(celestial.getConjunction(1772755)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772756)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1772757)).to.be.closeTo(145.265504902157, MathHelper.epsilon);
      expect(celestial.getConjunction(1132992)).to.be.closeTo(330.403978010768, MathHelper.epsilon);
      expect(celestial.getConjunction(1868191)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1868192)).to.be.closeTo(256.693393501849, MathHelper.epsilon);
      expect(celestial.getConjunction(1867492)).to.be.closeTo(278.46912256809, MathHelper.epsilon);
      expect(celestial.getConjunction(1867886)).to.be.closeTo(327.315683844566, MathHelper.epsilon);
      expect(celestial.getConjunction(1867520)).to.be.closeTo(308.537344813799, MathHelper.epsilon);
      expect(celestial.getConjunction(1844848)).to.be.closeTo(274.457623345507, MathHelper.epsilon);

    });

  });

  describe('getDaylightEquation', function () {

    it('should return correct results', function () {
      expect(celestial.getDaylightEquation(2018, 10.5, 1710693)).to.be.closeTo(-0.005420561412729585, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1710694)).to.be.closeTo(-0.005614522183274197, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1710695)).to.be.closeTo(-0.005807467501313135, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1710696)).to.be.closeTo(-0.005999348448389154, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1772755)).to.be.closeTo(0.00107770027863962, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1772756)).to.be.closeTo(0.0008716564611006835, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1772757)).to.be.closeTo(0.0006654834899484697, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1132992)).to.be.closeTo(-0.003588875611065327, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1868191)).to.be.closeTo(-0.013036431706478948, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1868192)).to.be.closeTo(-0.013001996328907502, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1867492)).to.be.closeTo(-0.010004131830564776, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1867886)).to.be.closeTo(-0.004905444657490358, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1867520)).to.be.closeTo(-0.005051116361050748, MathHelper.epsilon);
      expect(celestial.getDaylightEquation(2018, 10.5, 1844848)).to.be.closeTo(-0.009693442247709978, MathHelper.epsilon);
    });

  });

  describe('getSunriseTime', function () {

    it('should return correct results', function () {
      let sunriseTime = Celestial.getSunriseTime(0.0, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(0);
      expect(sunriseTime.sunriseMinute).to.equal(0);

      sunriseTime = Celestial.getSunriseTime(0.14583333333333, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(3);
      expect(sunriseTime.sunriseMinute).to.equal(29);

      sunriseTime = Celestial.getSunriseTime(0.25, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(6);
      expect(sunriseTime.sunriseMinute).to.equal(0);

      sunriseTime = Celestial.getSunriseTime(0.48958333333333, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(11);
      expect(sunriseTime.sunriseMinute).to.equal(44);

      sunriseTime = Celestial.getSunriseTime(0.5, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(12);
      expect(sunriseTime.sunriseMinute).to.equal(0);

      sunriseTime = Celestial.getSunriseTime(0.68402777777778, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(16);
      expect(sunriseTime.sunriseMinute).to.equal(25);

      sunriseTime = Celestial.getSunriseTime(0.75, 0.0);
      expect(sunriseTime.sunriseHour).to.equal(18);
      expect(sunriseTime.sunriseMinute).to.equal(0);
    });

  });

  describe('getLastConjunctionLongitude', function () {

    it('should return correct results', function () {
      expect(celestial.getLastConjunctionLongitude(1710693, 8.54483099478396)).to.be.closeTo(165.6082302520299, MathHelper.epsilon);
      expect(celestial.getLastConjunctionLongitude(1810694, 9.74443045978396)).to.be.closeTo(106.68697671647189, MathHelper.epsilon);
      expect(celestial.getLastConjunctionLongitude(1910695, 10.54899456473964)).to.be.closeTo(21.008813423509878, MathHelper.epsilon);
    });

  });

  describe('getNextConjunctionLongitude', function () {

    it('should return correct results', function () {
      expect(celestial.getNextConjunctionLongitude(1710693, 8.54483099478396)).to.be.closeTo(195.2209295926904, MathHelper.epsilon);
      expect(celestial.getNextConjunctionLongitude(1810694, 9.74443045978396)).to.be.closeTo(135.03288802411012, MathHelper.epsilon);
      expect(celestial.getNextConjunctionLongitude(1910695, 10.54899456473964)).to.be.closeTo(49.155790280363135, MathHelper.epsilon);
    });

  });

});

