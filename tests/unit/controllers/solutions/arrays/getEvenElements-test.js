import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getEvenElements', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenElements([]), [], `([]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenElements(['']), [], `(['']) -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenElements(['a','b','c']), ['b'], `(['a','b','c']) -> ['b']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenElements(['a','b','c', 'd']), ['b', 'd'], `(['a','b','c', 'd']) -> ['b', 'd']`);
});