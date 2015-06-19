import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.findByProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.findByProperty([], 'a', 'b'), null, `([], 'a', 'b') -> null`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.findByProperty([{a: 'c'}], 'a', 'b'), null, `([{a: 'c'}], 'a', 'b') -> null`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.findByProperty([{a: 'c'}, {a: 'b'}], 'a', 'b'), {a: 'b'}, `([{a: 'c'}, {a: 'b'}], 'a', 'b') -> {a: 'b'}`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.findByProperty([{a: 'c'}, {}], 'a', 'b'), null, `([{a: 'c'}], 'a', 'b') -> null`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.findByProperty([{a: 'c'}, {a: 'b', c: 1}, {a: 'b', c: 2}], 'a', 'b'), {a: 'b', c: 1}, `([{a: 'c'}, {a: 'b', c: 1}, {a: 'b', c: 2}], 'a', 'b') -> {a: 'b', c: 1}`);
});