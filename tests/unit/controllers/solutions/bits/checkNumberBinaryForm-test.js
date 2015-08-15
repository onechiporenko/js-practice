import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/bits', 'solutions.bits.checkNumberBinaryForm', {});

test('test1', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(1);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(1) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(2);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(2) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(3);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(3) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(4);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(4) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(5);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(5) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(6);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(6) -> false`);
});

test('test7', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(7);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(7) -> false`);
});

test('test8', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(8);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(8) -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(9);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(9) -> false`);
});

test('test10', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(10);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(10) -> true`);
});

test('test11', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(682);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(682) -> true`);
});

test('test12', function(assert) {
  var controller = this.subject();
  var res = controller.checkNumberBinaryForm(683);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(683) -> false`);
});