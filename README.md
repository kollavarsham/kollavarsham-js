# [kollavarsham](http://kollavarsham.org/)

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Dev-Dependency Status][daviddm-dev-image]][daviddm-dev-url] [![Code Climate][codeclimate-img]][[codeclimate-url] [![Code Climate Coverage][codeclimate-cov-img]][codeclimate-cov-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Convert Gregorian date to Kollavarsham date and vice versa


## Install

```sh
$ npm install --save kollavarsham
```


## Usage

```js
var Kollavarsham = require('kollavarsham');

var options = {
  system: 'SuryaSiddhanta',
  latitude: 10,
  longitude: 76.2,
  outputFormat: 'verbose'
};

var kollavarsham = new Kollavarsham(options);

var todayInMalayalamEra = kollavarsham.fromGregorianDate(new Date());

var today = kollavarsham.toGregorianDate(todayInMalayalamEra);
```


## Documentation

Click [here](http://kollavarsham.org/kollavarsham-js) to visit the API Documentation


## CLI app

Check out the [cli](https://www.npmjs.com/package/kollavarsham-cli) module ([GitHub repo](https://github.com/kollavarsham/cli)) for the `kollavarsham` cross-platform CLI app 

```plain
npm install -g kollavarsham-cli

kollavarsham --help
```

## Release History
Check out the history at [GitHub Releases](https://github.com/kollavarsham/kollavarsham-js/releases)

## License
Copyright (c) 2014-2015 The Kollavarsham Team. Licensed under the [MIT license](http://kollavarsham.org/LICENSE.txt).

[npm-image]: https://img.shields.io/npm/v/kollavarsham.svg
[npm-url]: https://npmjs.org/package/kollavarsham
[travis-image]: https://img.shields.io/travis/kollavarsham/kollavarsham-js.svg
[travis-url]: https://travis-ci.org/kollavarsham/kollavarsham-js
[daviddm-image]: https://img.shields.io/david/kollavarsham/kollavarsham-js.svg
[daviddm-url]: https://david-dm.org/kollavarsham/kollavarsham-js
[daviddm-dev-image]: https://img.shields.io/david/dev/kollavarsham/kollavarsham-js.svg
[daviddm-dev-url]: https://david-dm.org/kollavarsham/kollavarsham-js#info=devDependencies&view=table
[codeclimate-img]: https://img.shields.io/codeclimate/github/kollavarsham/kollavarsham-js.svg
[codeclimate-url]: https://codeclimate.com/github/kollavarsham/kollavarsham-js/code
[codeclimate-cov-img]: https://img.shields.io/codeclimate/coverage/github/kollavarsham/kollavarsham-js.svg
[codeclimate-cov-url]: https://codeclimate.com/github/kollavarsham/kollavarsham-js/coverage
[coveralls-image]: https://coveralls.io/repos/kollavarsham/kollavarsham-js/badge.svg
[coveralls-url]: https://coveralls.io/r/kollavarsham/kollavarsham-js
