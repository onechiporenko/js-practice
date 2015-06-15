import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getIndexOfMax', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getIndexOfMax([]), -1, `([]) -> -1`);
});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getIndexOfMax([1]), 0, `([1]) -> 0`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getIndexOfMax([1,2]), 1, `([1,2]) -> 1`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getIndexOfMax([1,2,2]), 2, `([1,2,2]) -> 2`);
});