import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arguments', 'solutions.arguments.checkParametersCount', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkParametersCount(3,4,5), true, `(3,4,5) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkParametersCount(3,4,5,6), true, `(3,4,5,6) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkParametersCount(3,4), false, `(3,4) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkParametersCount(3), false, `(3) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkParametersCount(), false, `() -> false`);
});