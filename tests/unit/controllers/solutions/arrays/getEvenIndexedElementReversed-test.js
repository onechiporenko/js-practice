import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getEvenIndexedElementReversed', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenIndexedElementReversed([]), [], `([]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenIndexedElementReversed([1,2,3,4,5,6,7]), [6,4,2], `([1,2,3,4,5,6,7]) -> [6,4,2]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenIndexedElementReversed([1]), [], `([1]) -> []`);
});