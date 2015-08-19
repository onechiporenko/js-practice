import { moduleFor, test } from 'ember-qunit';


moduleFor('controller:solutions/arguments', 'solutions.arguments.callTwoFunctionsIfExist', {

  beforeEach: function () {
    sinon.spy(Math, 'min');
    sinon.spy(Math, 'max');
    sinon.spy(Math, 'abs');
    sinon.spy(Math, 'random');
  },
  afterEach: function () {
    Math.max.restore();
    Math.min.restore();
    Math.abs.restore();
    Math.random.restore();
  }

});

test('test1 (Math.min, 1, 2, 3, Math.max, 4, 5, 6)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callTwoFunctionsIfExist(Math.min, 1, 2, 3, Math.max, 4, 5, 6);
  });
  assert.equal(Math.min.calledOnce, true, `Math.min called once`);
  assert.equal(Math.max.calledOnce, true, `Math.max called once`);
  assert.equal(Math.max.calledWith(4, 5, 6), true, 'Math.max called with valid arguments');
  assert.equal(Math.min.calledWith(1, 2, 3, 6), true, 'Math.min called with valid arguments');
  assert.equal(result, 1, 'result is valid');
});

test('test2 (Math.abs, Math.max, -4, -5, -6)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callTwoFunctionsIfExist(Math.abs, Math.max, -4, -5, -6);
  });
  assert.equal(Math.max.calledOnce, true, `Math.max called once`);
  assert.equal(Math.max.calledWith(-4, -5, -6), true, 'Math.max called with valid arguments');
  assert.equal(Math.abs.calledOnce, true, `Math.abs called once`);
  assert.equal(Math.abs.calledWith(-4), true, `Math.abs called with valid argument`);
  assert.equal(result, 4, 'result is valid');
});

test('test3 (Math.abs, Math.random)', function(assert) {
  var controller = this.subject();
  var result;
  Ember.run(function () {
    result = controller.callTwoFunctionsIfExist(Math.abs, Math.random);
  });
  assert.equal(Math.abs.calledOnce, true, `Math.max called once`);
  assert.equal(Math.abs.args[0].length, 1, `Math.max called with 1 argument`);
  assert.equal(Math.random.calledOnce, true, `Math.random called once`);
  assert.equal(Math.random.calledWith(), true, 'Math.random called without arguments');
});