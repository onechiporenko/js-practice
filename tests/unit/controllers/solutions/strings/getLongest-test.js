import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getLongest', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLongest(), null, `() -> null`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLongest('abc'), 'abc', `('abc') -> 'abc'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLongest('abc', 'abcd'), 'abcd', `('abc', 'abcd') -> 'abcd'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLongest('abc', 'abcd', 'defg'), 'defg', `('abc', 'abcd', 'defg') -> 'defg'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLongest(''), '', `('') -> ''`);
});