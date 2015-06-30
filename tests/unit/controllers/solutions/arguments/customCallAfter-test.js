import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arguments', 'solutions.arguments.customCallAfter', {

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
    controller.customCallAfter(Math.max, 1, 2, 3, 4);
  });
  assert.equal(Math.max.calledOnce, true, `function called`);
  assert.equal(Math.max.calledWith(1,2,3,4), true, `with valid arguments`);
});

test('test2', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.customCallAfter(1, 2, Math.max, 3, 4);
  });
  assert.equal(Math.max.calledOnce, true, `function called`);
  assert.equal(Math.max.calledWith(3,4), true, `with valid arguments`);
});

test('test3', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.customCallAfter(1, 2, 3, 4, Math.max);
  });
  assert.equal(Math.max.calledOnce, true, `function called`);
  assert.equal(Math.max.calledWith(), true, `with valid arguments`);
});