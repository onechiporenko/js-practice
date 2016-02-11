import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.rotateRight', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotateRight([[1]]), [[1]], `([[1]]) -> [[1]]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotateRight([[1, 2], [3, 4]]), [[3, 1], [4, 2]], `([[1, 2], [3, 4]]) -> [[3, 1], [4, 2]]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rotateRight([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7,4,1], [8,5,2], [9,6,3]], `([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) -> [[7,4,1], [8,5,2], [9,6,3]]`);
});

