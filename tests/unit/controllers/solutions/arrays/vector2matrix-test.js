import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.vector2matrix', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.vector2matrix([1]), [[1]]);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.vector2matrix([1,2,3,4]), [[1,2],[3,4]]);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.vector2matrix([1,2,3,4,5,6,7,8,9]), [[1,2,3],[4,5,6],[7,8,9]]);
});