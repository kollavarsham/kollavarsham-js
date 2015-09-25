import {expect} from 'chai';

import Celestial from '../../../lib/celestial/index.js';
import Calendar from '../../../lib/calendar.js';
import Calculations from '../../../lib/calculations.js';
import MathHelper from '../../../lib/mathHelper.js';

describe('Celestial', function () {

  let celestial;
  let calculations;

  const settings = {
    latitude  : 23.2,
    longitude : 75.8
  };

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

  describe('getTrueLongitude', function () {

    beforeEach(function () {
      // TODO: the fromGregorian call on calculations instance affects the results of celestial.getTrueLongitude == NOT GOOD.
      calculations = new Calculations(settings);
      calculations.fromGregorian(new Date(2014, Calendar.months.February, 11));
      celestial = calculations.celestial; // TODO: Without this line all of the below tests fail
    });

    it('should return correct results', function () {

      expect(celestial.getTrueLongitude(1710693, 215.330481398828, 'mercury')).to.be.closeTo(289.88306353213045, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710694, 216.345092245966, 'mercury')).to.be.closeTo(287.5697508256639, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710695, 217.360117559963, 'mercury')).to.be.closeTo(285.3345018716648, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710696, 218.375548627069, 'mercury')).to.be.closeTo(283.21081221487947, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1772755, 183.139229101953, 'mercury')).to.be.closeTo(292.18880454939944, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1772756, 184.136821438217, 'mercury')).to.be.closeTo(293.282988512441, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1772757, 185.135030298228, 'mercury')).to.be.closeTo(294.374859631595, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1132992, 355.302664567532, 'mercury')).to.be.closeTo(293.9465799068202, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1868191, 288.309252298232, 'mercury')).to.be.closeTo(280.3464538113562, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1868192, 289.32751969395, 'mercury')).to.be.closeTo(281.31653511556044, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1867492, 320.200309773426, 'mercury')).to.be.closeTo(285.210847518389, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1867886, 348.803993428264, 'mercury')).to.be.closeTo(308.08166588291397, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1867520, 348.072902270539, 'mercury')).to.be.closeTo(311.8001823278297, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1844848, 322.249740952942, 'mercury')).to.be.closeTo(287.4842598270579, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710693, 215.330481398828, 'venus')).to.be.closeTo(323.61256690487744, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710694, 216.345092245966, 'venus')).to.be.closeTo(320.6667338436022, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710695, 217.360117559963, 'venus')).to.be.closeTo(317.44221461811844, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710696, 218.375548627069, 'venus')).to.be.closeTo(313.94915646707983, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1772755, 183.139229101953, 'venus')).to.be.closeTo(253.04020930415993, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1772756, 184.136821438217, 'venus')).to.be.closeTo(253.38460020212364, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1772757, 185.135030298228, 'venus')).to.be.closeTo(253.74795898103542, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1132992, 355.302664567532, 'venus')).to.be.closeTo(331.14558509288406, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1868191, 288.309252298232, 'venus')).to.be.closeTo(344.0858948388685, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1868192, 289.32751969395, 'venus')).to.be.closeTo(343.83122951949247, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1867492, 320.200309773426, 'venus')).to.be.closeTo(338.029502629217, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1867886, 348.803993428264, 'venus')).to.be.closeTo(303.4895592788823, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1867520, 348.072902270539, 'venus')).to.be.closeTo(343.00490142151125, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1844848, 322.249740952942, 'venus')).to.be.closeTo(288.3469303368321, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710693, 215.330481398828, 'mars')).to.be.closeTo(158.81713795249846, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710694, 216.345092245966, 'mars')).to.be.closeTo(159.1708134644092, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710695, 217.360117559963, 'mars')).to.be.closeTo(159.5237551054525, MathHelper.epsilon);
      expect(celestial.getTrueLongitude(1710696, 218.375548627069, 'mars')).to.be.closeTo(159.87593814213136, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772755, 183.139229101953, 'mars')).to.be.closeTo(147.311514092937, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772756, 184.136821438217, 'mars')).to.be.closeTo(147.677928778235, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772757, 185.135030298228, 'mars')).to.be.closeTo(148.044220074319, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1132992, 355.302664567532, 'mars')).to.be.closeTo(149.172853178935, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1868191, 288.309252298232, 'mars')).to.be.closeTo(179.846235661092, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1868192, 289.32751969395, 'mars')).to.be.closeTo(180.010186773321, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867492, 320.200309773426, 'mars')).to.be.closeTo(179.72880836255, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867886, 348.803993428264, 'mars')).to.be.closeTo(158.084536851156, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867520, 348.072902270539, 'mars')).to.be.closeTo(159.029060106121, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1844848, 322.249740952942, 'mars')).to.be.closeTo(179.131773264678, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710693, 215.330481398828, 'saturn')).to.be.closeTo(194.843713150225, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710694, 216.345092245966, 'saturn')).to.be.closeTo(194.935519951897, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710695, 217.360117559963, 'saturn')).to.be.closeTo(195.027563651004, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710696, 218.375548627069, 'saturn')).to.be.closeTo(195.119823966232, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772755, 183.139229101953, 'saturn')).to.be.closeTo(192.153417342728, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772756, 184.136821438217, 'saturn')).to.be.closeTo(192.226932462565, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772757, 185.135030298228, 'saturn')).to.be.closeTo(192.301333486724, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1132992, 355.302664567532, 'saturn')).to.be.closeTo(201.3134602354, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1868191, 288.309252298232, 'saturn')).to.be.closeTo(200.822899002374, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1868192, 289.32751969395, 'saturn')).to.be.closeTo(200.88079361344, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867492, 320.200309773426, 'saturn')).to.be.closeTo(201.987978576402, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867886, 348.803993428264, 'saturn')).to.be.closeTo(201.614465529182, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867520, 348.072902270539, 'saturn')).to.be.closeTo(201.643214770863, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1844848, 322.249740952942, 'saturn')).to.be.closeTo(202.010337361371, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710693, 215.330481398828, 'saturn')).to.be.closeTo(194.843713150225, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710694, 216.345092245966, 'saturn')).to.be.closeTo(194.935519951897, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710695, 217.360117559963, 'saturn')).to.be.closeTo(195.027563651004, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1710696, 218.375548627069, 'saturn')).to.be.closeTo(195.119823966232, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772755, 183.139229101953, 'saturn')).to.be.closeTo(192.153417342728, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772756, 184.136821438217, 'saturn')).to.be.closeTo(192.226932462565, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1772757, 185.135030298228, 'saturn')).to.be.closeTo(192.301333486724, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1132992, 355.302664567532, 'saturn')).to.be.closeTo(201.3134602354, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1868191, 288.309252298232, 'saturn')).to.be.closeTo(200.822899002374, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1868192, 289.32751969395, 'saturn')).to.be.closeTo(200.88079361344, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867492, 320.200309773426, 'saturn')).to.be.closeTo(201.987978576402, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867886, 348.803993428264, 'saturn')).to.be.closeTo(201.614465529182, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1867520, 348.072902270539, 'saturn')).to.be.closeTo(201.643214770863, MathHelper.epsilon);
      //expect(celestial.getTrueLongitude(1844848, 322.249740952942, 'saturn')).to.be.closeTo(202.010337361371, MathHelper.epsilon);

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


});

