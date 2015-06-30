import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arguments', 'solutions.arguments.execSecondParameter', {

  beforeEach: function () {
    sinon.spy(Ember, 'K');
  },
  afterEach: function () {
    Ember.K.restore();
  }

});

test('test1', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.execSecondParameter(3,Ember.K,5);
  });
  assert.equal(Ember.K.calledOnce, true, `second parameter is a function`);
});

test('test2', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.execSecondParameter(3,4,Ember.K);
  });
  assert.equal(Ember.K.calledOnce, false, `second parameter is not a function`);
});

test('test3', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.execSecondParameter(Ember.K, 3, 4);
  });
  assert.equal(Ember.K.calledOnce, false, `second parameter is not a function`);
});

test('test4', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.execSecondParameter(Ember.K);
  });
  assert.equal(Ember.K.calledOnce, false, `second parameter does not exist`);
});

test('test5', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.execSecondParameter();
  });
  assert.equal(Ember.K.calledOnce, false, `second parameter does not exist`);
});