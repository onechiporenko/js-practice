import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.getMax', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(), null, 'empty arguments -> null');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(1), 1, '(1) -> 1');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(1,2,3), 3, '(1,2,3) -> 3');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(3,2,1), 3, '(3,2,1) -> 3');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(3,Number.POSITIVE_INFINITY,1), Number.POSITIVE_INFINITY, '(3,Number.POSITIVE_INFINITY,1) -> Number.POSITIVE_INFINITY');
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, '(Number.POSITIVE_INFINITY) -> Number.POSITIVE_INFINITY');
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMax(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), Number.POSITIVE_INFINITY, '(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) -> Number.POSITIVE_INFINITY');
});