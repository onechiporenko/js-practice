import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getVectorsSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum([],[]), []);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum([1,2,3], []), [1,2,3]);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum([], [1,2,3]), [1,2,3]);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum([1,2,3,5], [1,2,3]), [2,4,6,5]);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum([1,2,3], [1,2,3,5]), [2,4,6,5]);
});