import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.setEachProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.setEachProperty([], 'a', 'b'), [], `([], 'a', 'b') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.setEachProperty([{}], 'a', 'b'), [{a: 'b'}], `([{}], 'a', 'b') -> [{a: 'b'}]`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.setEachProperty([{}, {a: 1}], 'a', 'b'), [{a: 'b'}, {a: 'b'}], `([{}, {a: 1}], 'a', 'b') -> [{a: 'b'}, {a: 'b'}]`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.setEachProperty([{a: {}}, {a: 1}], 'a', 'b'), [{a: 'b'}, {a: 'b'}], `([{a: {}}, {a: 1}], 'a', 'b') -> [{a: 'b'}, {a: 'b'}]`);
});