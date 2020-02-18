# [kollavarsham](http://kollavarsham.org/)

[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Dev-Dependency Status][daviddm-dev-image]][daviddm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]


> Convert Gregorian date to Kollavarsham date and vice versa


## Install

### TypeScript/JavaScript/Node.js [![NPM version][npm-image]][npm-url]

```sh
$ npm install kollavarsham
```

### Python [![PyPI version][pypi-image]][pypi-url]

```sh
$ pip install kollavarsham
```

### C#/dotnet [![NuGet version][nuget-image]][nuget-url]

```sh
$ dotnet add package KollavarshamOrg.Converter
```

## Usage

### TypeScript/JavaScript/Node.js

```js
import { Kollavarsham } from 'kollavarsham';

const options = {
  system: 'SuryaSiddhanta',
  latitude: 10,
  longitude: 76.2
};

const kollavarsham = new Kollavarsham(options);

const today = kollavarsham.fromGregorianDate(new Date());

console.log(today.year, today.mlMasaName, today.date, `(${today.mlNaksatraName})`);
```

### Python

```python
import datetime
import pytz
import kollavarsham

now = pytz.utc.localize(datetime.datetime.utcnow())
kv = kollavarsham.Kollavarsham(latitude=10, longitude=76.2, system="SuryaSiddhanta")

today = kv.from_gregorian_date(date=now)
print(today.year, today.ml_masa_name, today.date, '(' + today.naksatra.ml_malayalam + ')')
```

### C#/dotnet

```csharp
using System;
using KollavarshamOrg;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            var settings = new Settings {
                Latitude = 10,
                Longitude = 76.2,
                System = "SuryaSiddhanta"
            };
            var kv = new Kollavarsham(settings);
            var today = kv.FromGregorianDate(DateTime.Now);
            Console.WriteLine($"{today.Year.ToString()} {today.MlMasaName} {today.Date.ToString()} ({today.MlNaksatraName})");
        }
    }
}
```

## Documentation

### TypeScript/JavaScript/Node.js

Check out the [Kollavarsham class](https://kollavarsham.org/kollavarsham-js/module-kollavarsham.Kollavarsham.html) within the API documentation as this is the entry point into the library.

## Release History
Check out the history at [GitHub Releases](https://github.com/kollavarsham/kollavarsham-js/releases)

## License
Copyright (c) 2014-2020 The Kollavarsham Team. Licensed under the [MIT license](http://kollavarsham.org/LICENSE.txt).

[npm-image]: https://badge.fury.io/js/kollavarsham.svg
[npm-url]: https://badge.fury.io/js/kollavarsham
[pypi-image]: https://badge.fury.io/py/kollavarsham.svg
[pypi-url]: https://badge.fury.io/py/kollavarsham
[nuget-image]: https://badge.fury.io/nu/KollavarshamOrg.Converter.svg
[nuget-url]: https://badge.fury.io/nu/KollavarshamOrg.Converter
[travis-image]: https://img.shields.io/travis/kollavarsham/kollavarsham-js.svg
[travis-url]: https://travis-ci.org/kollavarsham/kollavarsham-js
[daviddm-image]: https://img.shields.io/david/kollavarsham/kollavarsham-js.svg
[daviddm-url]: https://david-dm.org/kollavarsham/kollavarsham-js
[daviddm-dev-image]: https://img.shields.io/david/dev/kollavarsham/kollavarsham-js.svg
[daviddm-dev-url]: https://david-dm.org/kollavarsham/kollavarsham-js#info=devDependencies&view=table
[coveralls-image]: https://coveralls.io/repos/github/kollavarsham/kollavarsham-js/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/kollavarsham/kollavarsham-js?branch=master
