import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.replaceDigits', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits('1234'), '|', `('1234') -> '|'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits('1234a123b12c'), '|a|b|c', `('1234a123b12c') -> '|a|b|c'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits('abc'), 'abc', `('abc') -> 'abc'`);
});