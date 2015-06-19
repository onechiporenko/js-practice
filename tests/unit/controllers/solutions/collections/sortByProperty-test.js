import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.sortByProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.sortByProperty([], 'a'), [], `([], 'a') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.sortByProperty([{a: 2}, {a: 1}], 'a'), [{a: 1}, {a: 2}], `([{a: 2}, {a: 1}], 'a') -> [{a: 1}, {a: 2}]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.sortByProperty([{a: 2}], 'a'), [{a: 2}], `([{a: 2}], 'a') -> [{a: 2}]`);
});
