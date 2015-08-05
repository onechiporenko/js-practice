import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.checkIsPrime', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(1), false, '(1) -> false');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(2), true, '(2) -> true');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(3), true, '(3) -> true');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(4), false, '(4) -> false');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(100), false, '(100) -> false');
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(17), true, '(17) -> true');
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsPrime(349), true, '(349) -> true');
});