import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSnake0M', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnake0M([[]]), [[]], `([[]]) -> [[]]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnake0M([[1,2,3],[4,5,6],[7,8,9]]), [3,2,1,4,5,6,9,8,7], `[[1,2,3],[4,5,6],[7,8,9]]) -> [3,2,1,4,5,6,9,8,7]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnake0M([[1,2],[3,4]]), [2,1,3,4], `getSnake0M([[1,2],[3,4]]) -> [2,1,3,4]`);
});