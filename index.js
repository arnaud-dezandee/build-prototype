/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Arnaud Dezandee
 *
 * Authors:
 *     Arnaud Dezandee <dezandee.arnaud@gmail.com>
 */
var fs    = require('fs');
var path  = require('path');
var isAbsolute = require('path-is-absolute');

module.exports = function buildPrototype(object, dir) {
  if (!isAbsolute(dir)) {
    throw new Error('Build-prototype require an absolute path');
  }

  fs.readdirSync(dir)
    .map(function(file) {
      var realPath = path.resolve(dir, file);
      return require(realPath);
    })
    .forEach(function(fn) {
      object[fn.name] = fn;
    });
};
