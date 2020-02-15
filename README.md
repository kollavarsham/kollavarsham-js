# [kollavarsham](http://kollavarsham.org/)

[![NPM version][npm-image]][npm-url] [![PyPI version][pypi-image]][pypi-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Dev-Dependency Status][daviddm-dev-image]][daviddm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

> Convert Gregorian date to Kollavarsham date and vice versa


## Install

```sh
$ npm install --save kollavarsham
```


## Usage

```js
import { Kollavarsham } from 'kollavarsham';

const options = {
  system: 'SuryaSiddhanta',
  latitude: 10,
  longitude: 76.2
};

const kollavarsham = new Kollavarsham(options);

const todayInMalayalamEra = kollavarsham.fromGregorianDate(new Date());

const today = kollavarsham.toGregorianDate(todayInMalayalamEra);
```


## Documentation

Check out the [Kollavarsham class](https://kollavarsham.org/kollavarsham-js/module-kollavarsham.Kollavarsham.html) within the API documentation as this is the entry point into the library.


## CLI app

Check out the [cli](https://www.npmjs.com/package/kollavarsham-cli) module ([GitHub repo](https://github.com/kollavarsham/cli)) for the `kollavarsham` cross-platform CLI app 

```plain
npm install -g kollavarsham-cli

kollavarsham --help
```

## Release History
Check out the history at [GitHub Releases](https://github.com/kollavarsham/kollavarsham-js/releases)

## License
Copyright (c) 2014-2018 The Kollavarsham Team. Licensed under the [MIT license](http://kollavarsham.org/LICENSE.txt).

[npm-image]: https://badge.fury.io/js/kollavarsham.svg
[npm-url]: https://badge.fury.io/js/kollavarsham
[pypi-image]: https://badge.fury.io/py/kollavarsham.svg
[pypi-url]: https://badge.fury.io/py/kollavarsham
[travis-image]: https://img.shields.io/travis/kollavarsham/kollavarsham-js.svg
[travis-url]: https://travis-ci.org/kollavarsham/kollavarsham-js
[daviddm-image]: https://img.shields.io/david/kollavarsham/kollavarsham-js.svg
[daviddm-url]: https://david-dm.org/kollavarsham/kollavarsham-js
[daviddm-dev-image]: https://img.shields.io/david/dev/kollavarsham/kollavarsham-js.svg
[daviddm-dev-url]: https://david-dm.org/kollavarsham/kollavarsham-js#info=devDependencies&view=table
[coveralls-image]: https://coveralls.io/repos/github/kollavarsham/kollavarsham-js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/kollavarsham/kollavarsham-js?branch=master
