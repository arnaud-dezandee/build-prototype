var path = require('path');
var assert = require('assert');
var build = require('../index.js');
var absolute = path.resolve(__dirname, 'fixtures');

describe('build-prototype', function() {
  describe('should assign functions to object', function () {
    it('relative path', function() {
      var obj = {};
      assert.throws(function() {
        build(obj, 'fixtures');
      }, Error, 'Build-prototype require an absolute path');
    });

    it('absolute path', function () {
      var obj = {};
      build(obj, absolute);
      assert.equal(obj.foo(), 'foo');
      assert.equal(obj.bar(), 'bar');
    });
  });

  it('should assign functions to prototype', function () {
    var Test = function() {
      this.test = 'test';
    };
    build(Test.prototype, absolute);

    var myTest = new Test();

    assert.equal(myTest.test, 'test');
    assert.equal(myTest.foo(), 'foo');
    assert.equal(myTest.bar(), 'bar');
  });
});
