import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSnakeN0', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnakeN0([[1,2,3],[4,5,6],[7,8,9]]), [7,8,9,6,5,4,1,2,3], `([[1,2,3],[4,5,6],[7,8,9]]) -> [7,8,9,6,5,4,1,2,3]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnakeN0([[1,2],[3,4]]), [3,4,2,1], `([[1,2],[3,4]]) -> [3,4,2,1]`);
});