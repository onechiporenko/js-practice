import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getVectorsSum2', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([],[]), [], `([],[]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([1,2,3], []), [1,2,3], `([1,2,3], []) -> [1,2,3]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([], [1,2,3]), [1,2,3], `([], [1,2,3]) -> [1,2,3]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([1,2,3,5], [1,2,3]), [2,4,6,6], `([1,2,3,5], [1,2,3]) -> [2,4,6,6]`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([1,2,3], [1,2,3,5]), [2,4,6,6], `([1,2,3], [1,2,3,5]) -> [2,4,6,6]`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([1,2,3], [1,1,1,1,1,1,1]), [2,3,4,2,3,4,2], `([1,2,3], [1,1,1,1,1,1,1]) -> [2,3,4,2,3,4,2]`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getVectorsSum2([1,1,1,1,1,1,1], [1,2,3]), [2,3,4,2,3,4,2], `([1,1,1,1,1,1,1], [1,2,3]) -> [2,3,4,2,3,4,2]`);
});