import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/misc', 'solutions.misc.getSetter', {});

test('test1', function(assert) {
  var controller = this.subject();
  var obj = {};
  Object.defineProperty(obj, 'p1', {get: Ember.K, set: function () {console.log('custom setter');}});
  assert.ok(controller.getSetter(obj, 'p1').toString().indexOf('custom setter') !== -1, `setter is defined`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var obj = {};
  Object.defineProperty(obj, 'p1', {get: Ember.K});
  assert.ok(Ember.isNone(controller.getSetter(obj, 'p1')), `setter is not defined`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var obj = {};
  Object.defineProperty(obj, 'p1', {get: Ember.K});
  assert.ok(Ember.isNone(controller.getSetter(obj, 'p2')), `property is not defined`);
});