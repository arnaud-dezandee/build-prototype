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

module.exports = function buildPrototype(object, dir) {
  if (!path.isAbsolute(dir)) {
    dir = path.resolve(module.parent.filename, '..', dir);
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
