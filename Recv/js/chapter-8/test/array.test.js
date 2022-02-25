let assert = require('assert')

describe('Array', function () {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return 0 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
      assert.equal([1, 2, 3].indexOf(1), 0);
      assert.equal([1, 2, 3].indexOf(1), 0);
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
    it('should return 1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
  describe('#slice()', function() {
    it('不传参应该相当于复制数组', function() {
      assert.equal([1, 2, 3].slice(), [1,2,3]);
    });
    it('不传第二个参数相当于slice到末尾', function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
    it('传两个参数是时，不包含后一个参数', function() {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return 0 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
    it('should return 1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should return 0 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(1), 0);
    });
    it('should return 1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });
  });
});

describe('MyMap', function () {
  describe('构造函数', () => {
    it('should create map object', () => {

    })
    it('should create map object without new', () => {

    })
    it('should create map object with initials', () => {
      var m = new Map([[1,2], [8, 15], [9, 11]])
    })
  })
  describe('#set()', () => {

    it('should create map object with initials', () => {
      var m = new Map([[1,2], [8, 15], [9, 11]])
    })
    it('should create map object with initials', () => {
      var m = new Map([[1,2], [8, 15], [9, 11]])
    })
    it('should create map object with initials', () => {
      var m = new Map([[1,2], [8, 15], [9, 11]])
    })
  })
})


try {
  xxxx
} catch (e) {

} finally {

}



var context = null

function withContext(newContext, body) {
  var oldContext = context
  context = newContext
  try {
    var result = body()
  } finally {
    context = oldContext
  }
  return result
}
