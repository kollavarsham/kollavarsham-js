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

      expect(MathHelper.floatingPointEqual(Celestial.getTithi(294.989551683806, 37.5275236212135), 8.54483099478396)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.getTithi(333.593757395798, 45.9229472947752), 6.02743249158144)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.getTithi(15.597297524597, 123.3068304585275), 8.97579441116087)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.getTithi(163.989551683806, 15.5275236212135), 17.6281643281173)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.getTithi(3.593757395798, 245.9229472947752), 20.1940991582481)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.getTithi(56.597297524597, 302.3068304585275), 20.4757944111609)).to.be.true;

    });

  });

  describe('getMandaEquation', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(216.448410870245, 'sun'), -1.30810722363905)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(-72.3184309200178, 'moon'), -4.83281883352571)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(150.807334962742, 'moon'), 2.47190852495064)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(206.122810882618, 'sun'), -0.969422483995786)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(203.067198238109, 'moon'), -1.98547851952987)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(210.065221570941, 'sun'), -1.10305954670912)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(176.937266597806, 'moon'), 0.270697085906033)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.094016226779, 'sun'), -1.03685394627977)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(163.872300782873, 'moon'), 1.40749058746745)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(207.108413554698, 'sun'), -1.00328649380511)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(190.002232417937, 'moon'), -0.880005747995446)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(209.07961889886, 'sun'), -1.07011491083048)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(176.937266597806, 'moon'), 0.270697085906033)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.094016226779, 'sun'), -1.03685394627977)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(170.404783692979, 'moon'), 0.844536073585857)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(207.601214890739, 'sun'), -1.02010791244252)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(183.469749507872, 'moon'), -0.306629778128034)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.58681756282, 'sun'), -1.05352335673225)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(176.937266597806, 'moon'), 0.270697085906033)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.094016226779, 'sun'), -1.03685394627977)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(190.002232417937, 'moon'), -0.880005747995446)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(209.07961889886, 'sun'), -1.07011491083048)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(183.469749507872, 'moon'), -0.306629778128034)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.58681756282, 'sun'), -1.05352335673225)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(180.203508055438, 'moon'), -0.0179953506933944)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.340416894636, 'sun'), -1.04519830661684)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(186.735990965544, 'moon'), -0.594275735600709)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.833218230676, 'sun'), -1.06182894265887)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(183.469749507872, 'moon'), -0.306629778128034)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.58681756282, 'sun'), -1.05352335673225)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(176.937266597806, 'moon'), 0.270697085906033)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.094016226779, 'sun'), -1.03685394627977)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(180.203508055438, 'moon'), -0.0179953506933944)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(208.340416894636, 'sun'), -1.04519830661684)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(83.931123946793, 'mercury'), 4.59454849262788)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(81.6338497004791, 'mercury'), 4.57122541974445)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(191.523444971968, 'venus'), -0.365635863559596)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(191.706262903748, 'venus'), -0.37135641118768)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(34.7045977141798, 'mars'), 6.67523064837691)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(31.3669823899913, 'mars'), 6.10047750894678)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(-91.5542432559879, 'jupiter'), -5.17767683561233)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(-88.9654048381817, 'jupiter'), -5.17874093000353)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(-42.8326673204595, 'saturn'), -5.25521105975762)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMandaEquation(-40.2050617905807, 'saturn'), -4.98912071710793)).to.be.true;

    });

  });

  describe('declination', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(Celestial.declination(31.3101877453024), 12.2026059914001)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.declination(42.2597957259723), 15.8742931864835)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.declination(59.2349729472294), 20.4565845497204)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.declination(62.5975972349908), 21.1677169773821)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.declination(80.4818781723799), 23.6492922420057)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.declination(121.1497130809087), 20.3707052985127)).to.be.true;
      expect(MathHelper.floatingPointEqual(Celestial.declination(320.8687779979979), -14.8738036439391)).to.be.true;

    });

  });

  describe('getTrueLunarLongitude', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2299158.5), 167.084587116821)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2299159.5), 179.618866280373)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2299160.5), 191.953219840454)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2299161.5), 204.131519861513)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2361220.5), 349.195739637822)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2361221.5), 1.82309136307406)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2361222.5), 14.6945040053245)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(1721457.5), 6.55724149356419)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2456656.5), 16.24829446685)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2456657.5), 29.8253740270552)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2455957.5), 156.709071062542)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2456351.5), 316.081404838166)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2455985.5), 165.854323537076)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLunarLongitude(2433313.5), 236.806759936797)).to.be.true;

    });

  });

  describe('getTrueSolarLongitude', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2299158.5), 215.330481398828)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2299159.5), 216.345092245966)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2299160.5), 217.360117559963)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2299161.5), 218.375548627069)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2361220.5), 183.139229101953)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2361221.5), 184.136821438217)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2361222.5), 185.135030298228)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(1721457.5), 355.302664567532)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2456656.5), 288.309252298232)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2456657.5), 289.32751969395)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2455957.5), 320.200309773426)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2456351.5), 348.803993428264)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2455985.5), 348.072902270539)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueSolarLongitude(2433313.5), 322.249740952942)).to.be.true;

    });

  });

  describe('getMeanLongitude', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15634155, 4320000), 298.54776362783)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15637207, 4320000), 298.547793708385)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15635681, 4320000), 298.547778668108)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15635681, 4320000), 298.547778668108)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15637207, 4320000), 298.547793708385)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636444, 4320000), 298.547786188246)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15635681, 4320000), 298.547778668108)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636444, 4320000), 298.547786188246)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636063, 4320000), 298.547782433088)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636063, 4320000), 298.547782433088)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636444, 4320000), 298.547786188246)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636253, 4320000), 298.54778430592)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636063, 4320000), 298.547782433088)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getMeanLongitude(1868236.15636253, 4320000), 298.54778430592)).to.be.true;

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

      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710693, 215.330481398828, 'mercury'), 290.256193246842)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710694, 216.345092245966, 'mercury'), 287.939466847665)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710695, 217.360117559963, 'mercury'), 285.69872602331)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710696, 218.375548627069, 'mercury'), 283.567766431273)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772755, 183.139229101953, 'mercury'), 292.367822361191)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772756, 184.136821438217, 'mercury'), 293.462095381124)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772757, 185.135030298228, 'mercury'), 294.554161309681)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1132992, 355.302664567532, 'mercury'), 294.330597635538)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868191, 288.309252298232, 'mercury'), 280.5291286866)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868192, 289.32751969395, 'mercury'), 281.497932838323)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867492, 320.200309773426, 'mercury'), 285.388042602287)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867886, 348.803993428264, 'mercury'), 308.404674687418)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867520, 348.072902270539, 'mercury'), 312.012169567129)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1844848, 322.249740952942, 'mercury'), 287.862667589296)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710693, 215.330481398828, 'venus'), 324.308933009715)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710694, 216.345092245966, 'venus'), 321.407541005215)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710695, 217.360117559963, 'venus'), 318.226901026202)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710696, 218.375548627069, 'venus'), 314.775291122611)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772755, 183.139229101953, 'venus'), 253.240856229459)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772756, 184.136821438217, 'venus'), 253.582115854346)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772757, 185.135030298228, 'venus'), 253.942554219963)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1132992, 355.302664567532, 'venus'), 331.723144303665)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868191, 288.309252298232, 'venus'), 344.369387070859)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868192, 289.32751969395, 'venus'), 344.125688357144)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867492, 320.200309773426, 'venus'), 338.204333524322)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867886, 348.803993428264, 'venus'), 303.63668762932)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867520, 348.072902270539, 'venus'), 343.326701630526)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1844848, 322.249740952942, 'venus'), 289.230030387495)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710693, 215.330481398828, 'mars'), 158.887067202077)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710694, 216.345092245966, 'mars'), 159.240835569617)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710695, 217.360117559963, 'mars'), 159.593872869183)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710696, 218.375548627069, 'mars'), 159.946154425643)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772755, 183.139229101953, 'mars'), 147.311514092937)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772756, 184.136821438217, 'mars'), 147.677928778235)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772757, 185.135030298228, 'mars'), 148.044220074319)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1132992, 355.302664567532, 'mars'), 149.172853178935)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868191, 288.309252298232, 'mars'), 179.846235661092)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868192, 289.32751969395, 'mars'), 180.010186773321)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867492, 320.200309773426, 'mars'), 179.72880836255)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867886, 348.803993428264, 'mars'), 158.084536851156)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867520, 348.072902270539, 'mars'), 159.029060106121)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1844848, 322.249740952942, 'mars'), 179.131773264678)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710693, 215.330481398828, 'saturn'), 194.843713150225)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710694, 216.345092245966, 'saturn'), 194.935519951897)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710695, 217.360117559963, 'saturn'), 195.027563651004)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710696, 218.375548627069, 'saturn'), 195.119823966232)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772755, 183.139229101953, 'saturn'), 192.153417342728)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772756, 184.136821438217, 'saturn'), 192.226932462565)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772757, 185.135030298228, 'saturn'), 192.301333486724)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1132992, 355.302664567532, 'saturn'), 201.3134602354)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868191, 288.309252298232, 'saturn'), 200.822899002374)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868192, 289.32751969395, 'saturn'), 200.88079361344)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867492, 320.200309773426, 'saturn'), 201.987978576402)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867886, 348.803993428264, 'saturn'), 201.614465529182)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867520, 348.072902270539, 'saturn'), 201.643214770863)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1844848, 322.249740952942, 'saturn'), 202.010337361371)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710693, 215.330481398828, 'saturn'), 194.843713150225)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710694, 216.345092245966, 'saturn'), 194.935519951897)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710695, 217.360117559963, 'saturn'), 195.027563651004)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1710696, 218.375548627069, 'saturn'), 195.119823966232)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772755, 183.139229101953, 'saturn'), 192.153417342728)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772756, 184.136821438217, 'saturn'), 192.226932462565)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1772757, 185.135030298228, 'saturn'), 192.301333486724)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1132992, 355.302664567532, 'saturn'), 201.3134602354)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868191, 288.309252298232, 'saturn'), 200.822899002374)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1868192, 289.32751969395, 'saturn'), 200.88079361344)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867492, 320.200309773426, 'saturn'), 201.987978576402)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867886, 348.803993428264, 'saturn'), 201.614465529182)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1867520, 348.072902270539, 'saturn'), 201.643214770863)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getTrueLongitude(1844848, 322.249740952942, 'saturn'), 202.010337361371)).to.be.true;

    });

  });

  describe('getEclipticLongitude', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710693), 168.08719102714)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710694), 154.755365716082)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710695), 141.463254728984)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710696), 128.268162836368)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772755), 59.276089124806)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772756), 70.8982212421655)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772757), 82.3090362371512)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1132992), 95.3516217819625)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868191), 35.3086446106693)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868192), 22.4428920586289)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867492), 87.4807549325996)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867886), 156.157101234428)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867520), 67.5269642534404)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1844848), 154.486799638547)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710693), 168.08719102714)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710694), 154.755365716082)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710695), 141.463254728984)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710696), 128.268162836368)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772755), 59.276089124806)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772756), 70.8982212421655)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772757), 82.3090362371512)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1132992), 95.3516217819625)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868191), 35.3086446106693)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868192), 22.4428920586289)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867492), 87.4807549325996)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867886), 156.157101234428)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867520), 67.5269642534404)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1844848), 154.486799638547)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710693), 168.08719102714)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710694), 154.755365716082)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710695), 141.463254728984)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710696), 128.268162836368)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772755), 59.276089124806)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772756), 70.8982212421655)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772757), 82.3090362371512)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1132992), 95.3516217819625)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868191), 35.3086446106693)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868192), 22.4428920586289)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867492), 87.4807549325996)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867886), 156.157101234428)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867520), 67.5269642534404)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1844848), 154.486799638547)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710693), 168.08719102714)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710694), 154.755365716082)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710695), 141.463254728984)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710696), 128.268162836368)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772755), 59.276089124806)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772756), 70.8982212421655)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772757), 82.3090362371512)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1132992), 95.3516217819625)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868191), 35.3086446106693)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868192), 22.4428920586289)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867492), 87.4807549325996)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867886), 156.157101234428)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867520), 67.5269642534404)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1844848), 154.486799638547)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710693), 168.08719102714)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710694), 154.755365716082)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710695), 141.463254728984)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1710696), 128.268162836368)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772755), 59.276089124806)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772756), 70.8982212421655)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1772757), 82.3090362371512)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1132992), 95.3516217819625)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868191), 35.3086446106693)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1868192), 22.4428920586289)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867492), 87.4807549325996)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867886), 156.157101234428)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1867520), 67.5269642534404)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getEclipticLongitude(1844848), 154.486799638547)).to.be.true;

    });

  });

  describe('getConjunction', function () {

    it('should return correct results', function () {

      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710693), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710694), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710695), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710696), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772755), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772756), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772757), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1132992), 330.403978010768)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868191), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868192), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867492), 278.46912256809)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867886), 327.315683844566)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867520), 308.537344813799)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1844848), 274.457623345507)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710693), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710694), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710695), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710696), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772755), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772756), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772757), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1132992), 330.403978010768)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868191), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868192), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867492), 278.46912256809)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867886), 327.315683844566)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867520), 308.537344813799)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1844848), 274.457623345507)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710693), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710694), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710695), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710696), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772755), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772756), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772757), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1132992), 330.403978010768)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868191), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868192), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867492), 278.46912256809)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867886), 327.315683844566)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867520), 308.537344813799)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1844848), 274.457623345507)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710693), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710694), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710695), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710696), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772755), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772756), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772757), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1132992), 330.403978010768)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868191), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868192), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867492), 278.46912256809)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867886), 327.315683844566)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867520), 308.537344813799)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1844848), 274.457623345507)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710693), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710694), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710695), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1710696), 195.220929584348)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772755), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772756), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1772757), 145.265504902157)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1132992), 330.403978010768)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868191), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1868192), 256.693393501849)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867492), 278.46912256809)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867886), 327.315683844566)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1867520), 308.537344813799)).to.be.true;
      expect(MathHelper.floatingPointEqual(celestial.getConjunction(1844848), 274.457623345507)).to.be.true;

    });

  });


});

