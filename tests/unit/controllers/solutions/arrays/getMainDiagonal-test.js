import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getMainDiagonal', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getMainDiagonal([[1,2],[3,4]]), [1,4], `([[1,2],[3,4]]) -> [1,4]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getMainDiagonal([[1,2,3],[4,5,6],[7,8,9]]), [1,5,9], `([[1,2,3],[4,5,6],[7,8,9]]) -> [1,5,9]`);
});