import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkDotInCircle', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(3,4,5), true, `(3,4,5) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(1,1,1), true, `(1,1,1) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(0,0,0), true, `(0,0,0) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(4,5,1), false, `(4,5,1) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(-3,4,5), true, `(-3,4,5) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(1,-1,1), true, `(1,-1,1) -> true`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(0,1,0), true, `(0,1,0) -> false`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(4,-5,1), false, `(4,-5,1) -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(-3,-4,5), true, `(-3,-4,5) -> true`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkDotInCircle(3,-4,5), true, `(3,-4,5) -> true`);
});