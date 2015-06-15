import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.getCustomPath', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomPath({}, 'a.b.c'), null, `({}, 'a.b.c') -> null`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomPath({}, 'a'), null, `({}, 'a') -> null`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomPath({a: 1}, 'a'), 1, `({a: 1}, 'a') -> 1`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomPath({a: {a: {}, b: {c: 123, d: {}}}}, 'a.b.c'), 123, `({a: {a: {}, b: {c: 123, d: {}}}}, 'a.b.c') -> 123`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomPath({a: {b: {c: {d: 123}}}}, 'a.b.c'), {d: 123}, `({a: {b: {c: {d: 123}}}}, 'a.b.c')- > {d: 123}`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCustomPath({a: {b: 123}}, 'a.b.c'), null, `({a: {b: 123}}, 'a.b.c') -> null`);
});
