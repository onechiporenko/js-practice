import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/bits', 'solutions.bits.checkBit', {});

test('test1', function(assert) {
  var controller = this.subject();
  var res = controller.checkBit(1, 1);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(1, 1) -> false`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var res = controller.checkBit(256, 8);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(256, 8) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var res = controller.checkBit(256, 9);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(256, 9) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var res = controller.checkBit(256, 255);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(256, 255) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var res = controller.checkBit(240, 3);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(240, 3) -> false`);
});