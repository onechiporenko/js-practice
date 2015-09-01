import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/misc', 'solutions.misc.smartIsNaN', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(0/0), true, `(0/0) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(undefined), false, `(undefined) -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN({}), false, `({}) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(true), false, `(true) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(null), false, `(null) -> false`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(42), false, `(42) -> false`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN('42'), false, `('42') -> false`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(new Date()), false, `(new Date()) -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartIsNaN(new Date().toString()), false, `(new Date().toString()) -> false`);
});