import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkTriangle', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkTriangle(3,4,5), true, `(3,4,5) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkTriangle(5,4,3), true, `(5,4,3) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkTriangle(3,5,4), true, `(3,5,4) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkTriangle(1,2,3), false, `(1,2,3) -> false`);
});