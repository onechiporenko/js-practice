import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.escapeRegex', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.escapeRegex(''), '', `('') -> ''`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.escapeRegex('abc'), 'abc', `('abc') -> 'abc'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.escapeRegex('123'), '123', `('123') -> '123'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.escapeRegex('^$.*+?()[]{}|\\'), '\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\', `('^$.*+?()[]{}|\\') -> '\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|\\\\'`);
});