import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSum([1,2,3,4]), 10, `([1,2,3,4]) -> 10`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSum([]), null, `([]) -> null`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSum([-1, 1]), 0, `[-1, 1]) -> 0`);
});