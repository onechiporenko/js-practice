import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.checkNumberBinaryFormWithRegexp', {});

test('test1', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(1);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(1) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(2);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(2) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(3);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(3) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(4);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(4) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(5);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(5) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(6);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(6) -> false`);
});

test('test7', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(7);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(7) -> false`);
});

test('test8', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(8);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(8) -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(9);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(9) -> false`);
});

test('test10', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(10);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(10) -> true`);
});

test('test11', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(682);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(682) -> true`);
});

test('test12', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryFormWithRegexp(683);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(683) -> false`);
});