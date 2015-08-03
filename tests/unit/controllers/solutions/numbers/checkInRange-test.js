import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkInRange', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(2, 1, 3), true, `(2, 1, 3) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(1, 1, 3), true, `(1, 1, 3) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(3, 1, 3), true, `(3, 1, 3) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(0, 1, 3), false, `(0, 1, 3) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(4, 1, 3), false, `(4, 1, 3) -> false`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(1.0, 1.0, 3.0), true, `(1.0, 1.0, 3.0) -> true`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(3.0, 1.0, 3.0), true, `(3.0, 1.0, 3.0) -> true`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(2.0, 1.0, 3.0), true, `(2.0, 1.0, 3.0) -> true`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(0.99, 1.0, 3.0), false, `(0.99, 1.0, 3.0) -> false`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkInRange(3.1, 1.0, 3.0), false, `(3.1, 1.0, 3.0) -> false`);
});