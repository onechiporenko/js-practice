import { moduleFor, test } from 'ember-qunit';


moduleFor('controller:solutions/arguments', 'solutions.arguments.callWithAllIfFunc');

test('test1', function(assert) {
  var controller = this.subject();
  var result = controller.callWithAllIfFunc(Math.max, 1, 2, 3);
  assert.deepEqual(result, [3], `(Math.max, 1, 2, 3) -> [3]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var result = controller.callWithAllIfFunc(Math.max, Math.min, 1, 2, 3, 4, 5, 6);
  assert.deepEqual(result, [6, 1], `(Math.max, Math.min, 1, 2, 3, 4, 5, 6) -> [6, 1]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var result = controller.callWithAllIfFunc(Math.max, 1, 2, 3, Math.min);
  assert.deepEqual(result, [3, 1], `(Math.max, 1, 2, 3, Math.min) -> [3, 1]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var result = controller.callWithAllIfFunc(Math.abs, -1, Math.abs);
  assert.deepEqual(result, [1, 1], `(Math.abs, -1, Math.abs) -> [1, 1]`);
});