# [kollavarsham](http://kollavarsham.org/)

[![Circle CI Status][circleci-image]][circleci-url] [![Coverage Status][coveralls-image]][coveralls-url] [![GitHub Actions Status][gh-actions-image]][gh-actions-url] [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkollavarsham%2Fkollavarsham-js.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkollavarsham%2Fkollavarsham-js?ref=badge_shield)


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

### Go [![GitHub go.mod Go version][go-mod-image]][go-mod-url] [![Go Reference][go-pkg-image]][go-pkg-url]

```sh
go get github.com/kollavarsham/kollavarsham-go/converter
```

### Java [![Maven version][maven-image]][maven-url]

```xml
<dependency>
  <groupId>org.kollavarsham.converter</groupId>
  <artifactId>kollavarsham-converter</artifactId>
  <version>2.0.1</version>
</dependency>
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

### Java

```java
package org.kollavarsham.tester;

import java.time.Instant;

import org.kollavarsham.converter.Kollavarsham;
import org.kollavarsham.converter.KollavarshamDate;
import org.kollavarsham.converter.Settings;
import org.kollavarsham.converter.Settings.Builder;

public class App {
    public static void main( final String[] args) {
        final Settings settings = new Builder().latitude(10).longitude(76.2).system("SuryaSiddhanta").build();
        final Kollavarsham kv = new Kollavarsham(settings);
        final KollavarshamDate today = kv.fromGregorianDate(Instant.now());
        System.out.println( today.getYear() + today.getMlMasaName() + today.getDate() + '(' + today.getMlNaksatraName() + ')' );
    }
}
```

### C#/dotnet

```csharp
using System;

namespace KollavarshamOrg.Tester
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
Copyright (c) 2014-2023 The Kollavarsham Team. Licensed under the [MIT license](http://kollavarsham.org/LICENSE.txt).

[npm-image]: https://img.shields.io/npm/v/kollavarsham
[npm-url]: https://www.npmjs.com/package/kollavarsham
[pypi-image]: https://img.shields.io/pypi/v/kollavarsham
[pypi-url]: https://pypi.org/project/kollavarsham/
[go-mod-image]: https://img.shields.io/github/go-mod/go-version/kollavarsham/kollavarsham-go?filename=converter%2Fgo.mod
[go-mod-url]: https://github.com/kollavarsham/kollavarsham-go
[go-pkg-image]: https://pkg.go.dev/badge/github.com/kollavarsham/kollavarsham-go/converter/v2.svg
[go-pkg-url]: https://pkg.go.dev/github.com/kollavarsham/kollavarsham-go/converter/v2
[maven-image]: https://img.shields.io/maven-central/v/org.kollavarsham.converter/kollavarsham-converter
[maven-url]: https://search.maven.org/artifact/org.kollavarsham.converter/kollavarsham-converter
[nuget-image]: https://img.shields.io/nuget/v/KollavarshamOrg.Converter
[nuget-url]: https://www.nuget.org/packages/KollavarshamOrg.Converter
[circleci-image]: https://img.shields.io/circleci/build/github/kollavarsham/kollavarsham-js?label=CircleCI
[circleci-url]: https://app.circleci.com/pipelines/github/kollavarsham/kollavarsham-js
[gh-actions-image]: https://github.com/kollavarsham/kollavarsham-js/actions/workflows/ci.yml/badge.svg
[gh-actions-url]: https://github.com/kollavarsham/kollavarsham-js/actions/workflows/ci.yml?query=branch%3Amain
[coveralls-image]: https://img.shields.io/coveralls/github/kollavarsham/kollavarsham-js?label=Coveralls
[coveralls-url]: https://coveralls.io/github/kollavarsham/kollavarsham-js?branch=main


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkollavarsham%2Fkollavarsham-js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkollavarsham%2Fkollavarsham-js?ref=badge_large)
