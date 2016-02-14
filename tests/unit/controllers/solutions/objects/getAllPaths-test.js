
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.getAllPaths', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths({a: {b: {c: 1}}}, 'a.b.c'), ['a.b.c'], `({a: {b: {c: 1}}}, 'a.b.c') -> ['a.b.c']`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths({a: [{b: 1}, {b: 2}]}, 'a.@each.b'), ['a.0.b', 'a.1.b'], `({a: [{b: 1}, {b: 2}]}, 'a.@each.b') -> ['a.0.b', 'a.1.b'])`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths({a: [{b: [{c: 1}, {c: 2}]}, {b: [{c: 1}]}]}, 'a.@each.b.@each.c'), ['a.0.b.0.c' , 'a.0.b.1.c', 'a.1.b.0.c'], `({a: [{b: [{c: 1}, {c: 2}]}, {b: [{c: 1}]}]}, 'a.@each.b.@each.c') -> ['a.0.b.0.c' , 'a.0.b.1.c', 'a.1.b.0.c']`);
});