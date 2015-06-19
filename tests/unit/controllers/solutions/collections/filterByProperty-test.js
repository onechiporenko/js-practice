import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.filterByProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.filterByProperty([], 'a', 'b'), [], `([], 'a', 'b') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.filterByProperty([{a: 'c'}], 'a', 'b'), [], `([{a: 'c'}], 'a', 'b') -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.filterByProperty([{a: 'c'}, {a: 'b'}], 'a', 'b'), [{a: 'b'}], `([{a: 'c'}, {a: 'b'}], 'a', 'b') -> [{a: 'b'}]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.filterByProperty([{a: 'c'}, {}], 'a', 'b'), [], `([{a: 'c'}], 'a', 'b') -> []`);
});