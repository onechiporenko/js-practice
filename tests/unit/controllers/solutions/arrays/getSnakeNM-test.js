import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSnakeNM', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnakeNM([[]]), [[]]);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnakeNM([[1,2,3],[4,5,6],[7,8,9]]), [9,8,7,4,5,6,3,2,1]);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getSnakeNM([[1,2],[3,4]]), [4,3,1,2]);
});