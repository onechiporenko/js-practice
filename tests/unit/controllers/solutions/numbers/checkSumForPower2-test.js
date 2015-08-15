import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkSumForPower2', {});

test('test1', function(assert) {
  var controller = this.subject();
  var res = controller.checkSumForPower2(1, 1);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(1, 1) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var res = controller.checkSumForPower2(2, 1);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, false, `(2, 1) -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var res = controller.checkSumForPower2(7, 1);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(7, 1) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var res = controller.checkSumForPower2(7, 9);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(7, 9) -> true`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var res = controller.checkSumForPower2(23, 9);
  assert.equal(Ember.typeOf(res), 'boolean', `Результат булевого типа`);
  assert.equal(res, true, `(23, 9) -> true`);
});