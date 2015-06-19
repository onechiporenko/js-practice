import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.compact', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.compact([]), [], `([]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.compact([null, undefined, null, undefined]), [], `([null, undefined, null, undefined]) -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.compact([1, 2, 3]), [1, 2, 3], `([1, 2, 3]) -> [1, 2, 3]`);
});
