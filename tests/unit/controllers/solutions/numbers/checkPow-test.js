import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkPow', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkPow(1, 1), true, '(1, 1) -> true');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkPow(8, 2), true, '(8, 2) -> true');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkPow(8, 3), false, '(8, 3) -> false');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkPow(81, 3), true, '(81, 3) -> true');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkPow(64, 4), true, '(64, 4) -> true');
});
