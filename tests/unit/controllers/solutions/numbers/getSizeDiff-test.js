import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.getSizeDiff', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSizeDiff(1, 1), 0, '(1, 1) -> 0');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSizeDiff(64, 1), 6, '(64, 1) -> 6');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSizeDiff(64, 64), 0, '(64, 64) -> 0');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSizeDiff(1, 64), 6, '(1, 64) -> 6');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSizeDiff(32, 64), 1, '(32, 64) -> 1');
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSizeDiff(64, 32), 1, '(64, 32) -> 1');
});