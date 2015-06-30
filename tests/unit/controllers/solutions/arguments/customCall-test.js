import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arguments', 'solutions.arguments.customCall', {

  beforeEach: function () {
    sinon.spy(Math, 'max');
  },
  afterEach: function () {
    Math.max.restore();
  }

});

test('test1', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.customCall('not function', 1, 2, 3, 4);
  });
  assert.equal(Math.max.called, false, `function not called`);
});

test('test2', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.customCall(Math.max, 1, 2, 3, 4);
  });
  assert.equal(Math.max.calledOnce, true, `function called`);
  assert.equal(Math.max.args[0][0][0], Math.max, `with valid arguments`);
  assert.deepEqual(Array.prototype.slice.call(Math.max.args[0][0], 1), [1, 2, 3, 4], 'with valid arguments');
});

test('test3', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.customCall(Math.max);
  });
  assert.equal(Math.max.calledOnce, true, `function called`);
  assert.equal(Math.max.args[0][0][0], Math.max, `with valid arguments`);
  assert.deepEqual(Array.prototype.slice.call(Math.max.args[0][0], 1), [], 'with valid arguments');
});
