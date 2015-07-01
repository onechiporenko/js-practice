import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getOddColumns', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOddColumns([[1,2],[3,4]]), [[1],[3]], `([[1,2],[3,4]]) -> [[1],[3]]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOddColumns([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]), [[1,3],[4,6],[7,9],[10,12]], `([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]) -> [[1,3],[4,6],[7,9],[10,12]]`);
});