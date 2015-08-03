import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSumOfMultiDimensionalArray', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumOfMultiDimensionalArray([1]), 1, `([1]) -> 1`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumOfMultiDimensionalArray([1,2,3]), 6, `([1,2,3]) -> 6`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumOfMultiDimensionalArray([[1,2,3],[3,2,1]]), 12, `([[1,2,3],[3,2,1]]) -> 12`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumOfMultiDimensionalArray([[[5,0],[1,0],[4,0]],[[0,2],[2,0],[7,0]],[[1,0],[4,0],[6,1]]]), 33, `([[[5,0],[1,0],[4,0]],[[0,2],[2,0],[7,0]],[[1,0],[4,0],[6,1]]]) -> 33`);
});