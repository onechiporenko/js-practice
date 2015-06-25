import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.removeLast', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast(''), '', `('') -> ''`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast('ABC'), '', `('ABC') -> ''`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast('aABCc'), 'aABCc', `('aABCc') -> 'aABCc'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast('aABCc'), 'aABCc', `('aABCc') -> 'aABCc'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast('ABC1'), 'ABC1', `('ABC1') -> 'ABC1'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast('ABC_'), 'ABC_', `('ABC_') -> 'ABC_'`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeLast('abcABC'), 'abc', `('abcABC') -> 'abc'`);
});