import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.checkSome', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkSome([], 'a', 'b'), false, `([], 'a', 'b') -> false`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkSome([{a: 'b'}], 'a', 'b'), true, `([{a: 'b'}], 'a', 'b') -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkSome([{a: 'c'}], 'a', 'b'), false, `([{a: 'c'}], 'a', 'b') -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkSome([{a: 'c'}, {a: 'b'}], 'a', 'b'), true, `([{a: 'c'}, {a: 'b'}], 'a', 'b') -> true`);
});