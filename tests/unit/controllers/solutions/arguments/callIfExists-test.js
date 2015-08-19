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

test('test1 (\'min\', 1, 2, 3, 4)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callIfExists('min', 1, 2, 3, 4);
  });
  assert.equal(Math.min.calledOnce, true, `Math.min called`);
  assert.equal(Math.min.calledWith(1, 2, 3, 4), true, 'with valid arguments');
  assert.equal(result, 1, 'result is valid');
});

test('test2 (\'max\', 1, 2, 3, 4)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callIfExists('max', 1, 2, 3, 4);
  });
  assert.equal(Math.max.calledOnce, true, `Math.max called`);
  assert.equal(Math.max.calledWith(1, 2, 3, 4), true, 'with valid arguments');
  assert.equal(result, 4, 'result is valid');
});

test('test3 (\'fakeFunc\', 1, 2, 3, 4)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callIfExists('fakeFunc', 1, 2, 3, 4);
  });
  assert.equal(result , null, `null returned`);
});