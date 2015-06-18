import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkAllDigitsUnique', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(101), false, `(101) -> false`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(123), true, `(123) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(1234), true, `(1234) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(54312), true, `(54312) -> true`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(123456), true, `(123456) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(1234567), true, `(1234567) -> true`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(12345678), true, `(12345678) -> true`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(123456789), true, `(123456789) -> true`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkAllDigitsUnique(1234567890), true, `(1234567890) -> true`);
});