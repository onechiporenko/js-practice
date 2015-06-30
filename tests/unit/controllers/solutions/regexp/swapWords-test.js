import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.swapWords', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords(''), '', `('') -> ''`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords('abc'), 'abc', `('abc') -> 'abc'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords('abc, def'), 'def, abc', `('abc, def') -> 'def, abc'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords('abc, 123 def'), 'def, 123 abc', `('abc, 123 def') -> 'def, 123 abc'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords('abc|ghi|def'), 'def|ghi|abc', `('abc|ghi|def') -> 'def|ghi|abc'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords('abc ghi def '), 'def ghi abc ', `('abc ghi def ') -> 'def ghi abc '`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.swapWords(' abc ghi def'), ' def ghi abc', `(' abc ghi def') -> ' def ghi abc'`);
});