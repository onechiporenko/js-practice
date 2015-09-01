import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.replaceDigits2', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits2('12345'), '*****', `('12345') -> '*****'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits2('1234a123b12c'), '****a***b**c', `('1234a123b12c') -> '****a***b**c'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits2('abc'), 'abc', `('abc') -> 'abc'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits2('6789'), '||||', `('6789') -> '||||'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceDigits2('6789a678b67c'), '||||a|||b||c', `('6789a678b67c') -> '||||a|||b||c'`);
});