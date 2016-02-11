import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.rotate180', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotate180([[1]]), [[1]], `([[1]]) -> [[1]]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotate180([[1, 2], [3, 4]]), [[4, 3], [2, 1]], `([[1, 2], [3, 4]]) -> [[4, 3], [2, 1]]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotate180([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[9,8,7], [6,5,4], [3,2,1]], `([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [[9,8,7], [6,5,4], [3,2,1]]`);
});

