import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.multiToOne2', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([]), [], `([]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([[], [[]]]), [[[]]], `([[], [[]]]) -> [[[]]]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([1]), [1], `([1]) -> [1]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([1, 2]), [1, 2], `([1, 2]) -> [1, 2]`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([1, [2], [3, 4]]), [[1, 2, 3, 4]], `([1, [2], [3, 4]]) -> [[1, 2, 3, 4]]`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([[1], 2, [3, 4], [5, [6]]]), [[[1, 2, 3, 4, 5, 6]]], `([[1], 2, [3, 4], [5, [6]]]) -> [[[1, 2, 3, 4, 5, 6]]]`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.multiToOne2([[1], 2, [[[[3]]], 4], [5, [6]]]), [[[[1, 2, 3, 4, 5, 6]]]], `([[1], 2, [[[[3]]], 4], [5, [6]]]) -> [[[[1, 2, 3, 4, 5, 6]]]]`);
});