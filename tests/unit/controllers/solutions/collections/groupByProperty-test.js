import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/collections', 'solutions.collections.groupByProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.groupByProperty([], 'a'), {}, `([], 'a') -> {}`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.groupByProperty([{a: 'b'}], 'a'), {b: [{a: 'b'}]}, `([{a: 'b'}], 'a') -> {b: [{a: 'b'}]}`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.groupByProperty([{a: 'b'}, {a: 'c'}, {a: 'c', b: 'a'}], 'a'), {b: [{a: 'b'}], c: [{a: 'c'}, {a: 'c', b: 'a'}]}, `([{a: 'b'}, {a: 'c'}, {a: 'c', b: 'a'}], 'a') -> {b: [{a: 'b'}], c: [{a: 'c'}, {a: 'c', b: 'a'}]}`);
});