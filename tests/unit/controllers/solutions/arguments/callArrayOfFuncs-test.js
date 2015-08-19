import { moduleFor, test } from 'ember-qunit';


moduleFor('controller:solutions/arguments', 'solutions.arguments.callArrayOfFuncs');

test('test1', function(assert) {
  var controller = this.subject();
  var result = controller.callArrayOfFuncs([Math.max], [1,2,3]);
  assert.deepEqual(result, [3], `([Math.max], [1,2,3]) -> [3]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var result = controller.callArrayOfFuncs([Math.max, Math.min], [1,2,3], [4,5,6]);
  assert.deepEqual(result, [3, 4], `([Math.max, Math.min], [1,2,3], [4,5,6]) -> [3, 4]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var result = controller.callArrayOfFuncs([Math.max, Math.clz32], [1,2,3]);
  assert.deepEqual(result, [3, 32], `([Math.max, Math.clz32], [1,2,3]) -> [3, 32]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var result = controller.callArrayOfFuncs([], [1,2,3]);
  assert.deepEqual(result, [], `([], [1,2,3]) -> []`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var result = controller.callArrayOfFuncs([Math.max, Math.min], [1,2,3], [4,5,6], [7,8,9]);
  assert.deepEqual(result, [3, 4], `([Math.max, Math.min], [1,2,3], [4,5,6], [7,8,9]) -> [3, 32]`);
});