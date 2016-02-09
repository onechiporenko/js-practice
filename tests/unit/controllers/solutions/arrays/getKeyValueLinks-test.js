import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getKeyValueLinks', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getKeyValueLinks([['a', 2], ['b', 4]]), {a: 2, b: 4}, `([['a', 2], ['b', 4]]) -> {a: 2, b: 4}`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getKeyValueLinks([['a', 2], ['b', 4], ['a', 3]]), {a: 3, b: 4}, `([['a', 2], ['b', 4], ['a', 3]]) -> {a: 3, b: 4}`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getKeyValueLinks([]), {}, `([]) -> {}`);
});