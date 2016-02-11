import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.rotateLeft', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotateLeft([[1]]), [[1]], `([[1]]) -> [[1]]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotateLeft([[1, 2], [3, 4]]), [[2, 4], [1, 3]], `([[1, 2], [3, 4]]) -> [[2, 4], [1, 3]]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotateLeft([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[3,6,9], [2,5,8], [1,4,7]], `([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [[3,6,9], [2,5,8], [1,4,7]]`);
});

