import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.getNearestNumber', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getNearestNumber(1, 1), 1, `(1, 1) -> 1`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getNearestNumber(10.1, 3), 9, `(10.1, 3) -> 9`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getNearestNumber(11.1, 3), 12, `(11.1, 3) -> 12`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getNearestNumber(-1, 1), -1, `(-1, 1) -> -1`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getNearestNumber(-10.1, 3), -9, `(-10.1, 3) -> -9`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getNearestNumber(-11.1, 3), -12, `(-11.1, 3) -> -12`);
});