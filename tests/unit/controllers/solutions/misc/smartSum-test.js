import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/misc', 'solutions.misc.smartSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSum(1)(2), 3, `(1)(2) -> 3`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSum(-1)(1), 0, `(-1)(1) -> 0`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(Ember.typeOf(controller.smartSum(-1)), 'function', `smartSum returns function`);
});
