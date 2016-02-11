import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getMaxDepth', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([]), 1, `([]) -> 1`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([[], [[]]]), 3, `([[], [[]]]) -> 3`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([1]), 1, `([1]) -> 1`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([1, 2]), 1, `([1, 2]) -> 1`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([1, [2], [3, 4]]), 2, `([1, [2], [3, 4]]) -> 2`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([[1], 2, [3, 4], [5, [6]]]), 3, `([[1], 2, [3, 4], [5, [6]]]) -> 3`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxDepth([[1], 2, [[[[3]]], 4], [5, [6]]]), 5, `([[1], 2, [[[[3]]], 4], [5, [6]]]) -> 5`);
});