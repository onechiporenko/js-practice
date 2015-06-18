import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.getLine', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLine(1,1,1,1).toFixed(3), '1.000', '(1,1,1,1) -> 1');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLine(0,0,0,0).toFixed(3), '0.000', '(0,0,0,0) -> 0');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLine(-3,0,0,-4).toFixed(3), '5.000', '(-3,0,0,-4) -> 5');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getLine(-5,-4,-2,-8).toFixed(3), '5.000', '(-5,-4,-2,-8) -> 5');
});