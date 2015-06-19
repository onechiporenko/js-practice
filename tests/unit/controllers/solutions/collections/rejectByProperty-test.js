import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.rejectByProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rejectByProperty([], 'a', 'b'), [], `([], 'a', 'b') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rejectByProperty([{a: 'b'}], 'a', 'b'), [], `([{a: 'b'}], 'a', 'b') -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rejectByProperty([{a: 'c'}], 'a', 'b'), [{a: 'c'}], `([{a: 'c'}], 'a', 'b') -> [{a: 'c'}]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rejectByProperty([{a: 'c'}, {a: 'b'}], 'a', 'b'), [{a: 'c'}], `([{a: 'c'}, {a: 'b'}], 'a', 'b') -> [{a: 'c'}]`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.rejectByProperty([{a: 'c'}, {a: 'b'}, {a: 'b'}], 'a', 'b'), [{a: 'c'}], `([{a: 'c'}, {a: 'b'}, {a: 'b'}], 'a', 'b') -> [{a: 'c'}]`);
});