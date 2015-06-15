import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.getCustomRoot', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomRoot(1, 1).toFixed(3), '1.000', '(1, 1) -> 1');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomRoot(2, 2).toFixed(3), '1.414', '(2, 2) -> 1.414...');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomRoot(8, 3).toFixed(3), '2.000', '(8, 3) -> 2');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomRoot(125, 3).toFixed(3), '5.000', '(125, 3) -> 5');
});
