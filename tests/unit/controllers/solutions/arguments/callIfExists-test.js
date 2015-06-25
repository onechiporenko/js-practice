import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arguments', 'solutions.arguments.callIfExists', {

  beforeEach: function () {
    sinon.spy(Math, 'min');
    sinon.spy(Math, 'max');
  },
  afterEach: function () {
    Math.max.restore();
    Math.min.restore();
  }

});

test('test1', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.callIfExists('min', 1, 2, 3, 4);
  });
  assert.equal(Math.min.calledOnce, true, `Math.min called`);
  assert.equal(Math.min.calledWith(1, 2, 3, 4), true, 'with valid arguments');
});

test('test2', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.callIfExists('max', 1, 2, 3, 4);
  });
  assert.equal(Math.max.calledOnce, true, `Math.max called`);
  assert.equal(Math.max.calledWith(1, 2, 3, 4), true, 'with valid arguments');
});
