import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSnake00', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnake00([[]]), [[]]);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnake00([[1,2,3],[4,5,6],[7,8,9]]), [1,2,3,6,5,4,7,8,9]);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnake00([[1,2],[3,4]]), [1,2,4,3]);
});