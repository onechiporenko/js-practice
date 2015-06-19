import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.mapByProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.mapByProperty([], 'a'), [], `([], 'a') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.mapByProperty([{}], 'a'), [null], `([{}], 'a') -> [null]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.mapByProperty([{a: 1}], 'a'), [1], `([{a: 1}], 'a') -> [1]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.mapByProperty([{a: 1}, {a: {}}], 'a'), [1, {}], `([{a: 1}, {a: {}}], 'a') -> [1, {}]`);
});
