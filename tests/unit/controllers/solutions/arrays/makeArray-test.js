import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.makeArray', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.makeArray([1]), [1], `([1]) -> [1]`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.makeArray([]), [], `([]) -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.makeArray(1), [1], `(1) -> [1]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.makeArray(''), [''], `('') -> ['']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.makeArray(new Array()), [], `(new Arrray()) -> []`);
});