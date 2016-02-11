import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.insertAt', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.insertAt([1], 1, 2), [1, 2], `([1], 1, 2) -> [1, 2]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.insertAt([], 1, 1), [1], `([], 1, 1) -> [1]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.insertAt([], 2, 1), [1], `([], 2, 1) -> [1]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.insertAt([], -1, 1), [1], `([], -1, 1) -> [1]`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.insertAt([2], -1, 1), [1, 2], `([2], -1, 1) -> [1, 2]`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.insertAt([1, 2, 4], 2, 3), [1, 2, 3, 4], `([1, 2, 4], 2, 3) -> [1, 2, 3, 4]`);
});