import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getOddEvenElements', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOddEvenElements([[]]), [[]], `([[]]) -> [[]]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOddEvenElements([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]), [[1,3],[6,8],[9,11],[14,16]], `([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]) -> [[1,3],[6,8],[9,11],[14,16]]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOddEvenElements([[1,2],[3,4]]), [[1],[4]], `([[1,2],[3,4]]) -> [[1],[4]]`);
});