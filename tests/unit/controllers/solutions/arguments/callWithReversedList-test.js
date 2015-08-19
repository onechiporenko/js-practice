import { moduleFor, test } from 'ember-qunit';


moduleFor('controller:solutions/arguments', 'solutions.arguments.callWithReversedList', {

  beforeEach: function () {
    sinon.spy(Math, 'min');
    sinon.spy(Math, 'max');
    sinon.spy(Math, 'random');
  },
  afterEach: function () {
    Math.max.restore();
    Math.min.restore();
    Math.random.restore();
  }

});

test('test1 (Math.min, 1, 2, 3, 4)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callWithReversedList(Math.min, 1, 2, 3, 4);
  });
  assert.equal(Math.min.calledOnce, true, `Math.min called once`);
  assert.equal(Math.min.calledWith(4, 3, 2, 1), true, 'Math.min called with valid arguments');
  assert.equal(result, 1, 'result is valid');
});

test('test2 (Math.max, 1)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callWithReversedList(Math.max, 1);
  });
  assert.equal(Math.max.calledOnce, true, `Math.max called once`);
  assert.equal(Math.max.calledWith(1), true, 'Math.max called with valid arguments');
  assert.equal(result, 1, 'result is valid');
});

test('test3 (Math.random)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callWithReversedList(Math.random);
  });
  assert.equal(Math.random.calledOnce, true, `Math.random called once`);
  assert.equal(Math.random.calledWith(), true, 'Math.random called without arguments');
});