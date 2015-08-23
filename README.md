# build-prototype [![Build Status](https://travis-ci.org/Adezandee/build-prototype.svg?branch=master)](https://travis-ci.org/Adezandee/build-prototype)

> Build object with all files in a directory


## Install

```
$ npm install --save build-prototype
```

## Usage

```js
// ./methods/hello.js

module.exports = function hello(){
  return 'hello';
}
```

```js
// ./test.js
var build = require('build-prototype');

var myObj = {}
build(myObj, path.resolve('./methods'))

myObj.hello() === 'hello' // True
```

## License

MIT © [Arnaud Dezandee](https://github.com/Adezandee)
