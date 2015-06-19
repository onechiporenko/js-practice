import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.checkEvery', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkEvery([], 'a', 'b'), true, `([], 'a', 'b') -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkEvery([{a: 'b'}], 'a', 'b'), true, `([{a: 'b'}], 'a', 'b') -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkEvery([{a: 'c'}], 'a', 'b'), false, `([{a: 'c'}], 'a', 'b') -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkEvery([{a: 'c'}, {a: 'b'}], 'a', 'b'), false, `([{a: 'c'}, {a: 'b'}], 'a', 'b') -> false`);
});