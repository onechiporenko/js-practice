import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSecondaryDiagonal', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSecondaryDiagonal([[]]), [], `([[]]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSecondaryDiagonal([[1,2],[3,4]]), [2,3], `([[1,2],[3,4]]) -> [2,3]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSecondaryDiagonal([[1,2,3],[4,5,6],[7,8,9]]), [3,5,7], `([[1,2,3],[4,5,6],[7,8,9]]) -> [3,5,7]`);
});