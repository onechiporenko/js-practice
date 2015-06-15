import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getConcat', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getConcat([]), '', `([]) -> ''`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getConcat(['']), '', `(['']) -> ''`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getConcat(['a','b','c']), 'abc', `(['a','b','c']) -> 'abc'`);
});