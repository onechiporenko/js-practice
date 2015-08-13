import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.invertObject', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObject({}), {}, `({}) -> {}`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObject({a: 1, b: 2}), {'1': 'a', '2': 'b'}, `({a: 1, b: 2}) -> {'1': 'a', '2': 'b'}`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObject({a: 1, b: 2, c: 1}), {'1': 'c', '2': 'b'}, `({a: 1, b: 2, c: 1}) -> {'1': 'c', '2': 'b'}`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObject({a: 1, b: 2, c: 1, '1': 'c'}), {'1': 'c', '2': 'b', 'c': '1'}, `({a: 1, b: 2, c: 1, '1': 'c'}) -> {'1': 'c', '2': 'b', 'c': '1'}`);
});