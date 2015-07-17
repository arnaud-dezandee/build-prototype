var path = require('path');
var assert = require('assert');
var build = require('../index.js');

describe('build-prototype', function() {
  describe('should assign functions to object', function () {
    it('relative path', function() {
      var obj = {};
      build(obj, 'fixtures');
      assert.equal(obj.foo(), 'foo');
      assert.equal(obj.bar(), 'bar');
    });

    it('absolute path', function () {
      var obj = {};
      build(obj, path.resolve(__dirname, 'fixtures'));
      assert.equal(obj.foo(), 'foo');
      assert.equal(obj.bar(), 'bar');
    });
  });

  it('should assign functions to prototype', function () {
    var Test = function() {
      this.test = 'test';
    };
    build(Test.prototype, 'fixtures');

    var myTest = new Test();

    assert.equal(myTest.test, 'test');
    assert.equal(myTest.foo(), 'foo');
    assert.equal(myTest.bar(), 'bar');
  });
});
