import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.invertObjectWithoutOverride', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObjectWithoutOverride({}), {}, `({}) -> {}`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObjectWithoutOverride({a: 1, b: 2}), {'1': 'a', '2': 'b'}, `({a: 1, b: 2}) -> {'1': 'a', '2': 'b'}`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.invertObjectWithoutOverride({a: 1, b: 2, c: 1}), {'1': ['a', 'c'], '2': 'b'}, `({a: 1, b: 2, c: 1}), {'1': ['a', 'c'], '2': 'b'}`);
});