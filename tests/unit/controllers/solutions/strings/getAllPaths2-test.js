import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getAllPaths2', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('a.b.c'), ['a.b.c'], `('a.b.c') -> ['a.b.c']`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('a.{b}.c'), ['a.b.c'], `('a.{b}.c') -> ['a.b.c']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('a.{b.c}.d'), ['a.b.c.d'], `('a.{b.c}.d') -> ['a.b.c.d']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('a.{b,c}.d'), ['a.b.d', 'a.c.d'], `('a.{b,c}.d') -> ['a.b.d', 'a.c.d']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('a.{b,c}.{d,e}'), ['a.b.d', 'a.b.e', 'a.c.d', 'a.c.e'], `('a.{b,c}.{d,e}') -> ['a.b.d', 'a.b.e', 'a.c.d', 'a.c.e']`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('{b,c}.{d,e}'), ['b.d', 'b.e', 'c.d', 'c.e'], `('{b,c}.{d,e}') -> ['b.d', 'b.e', 'c.d', 'c.e']`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getAllPaths2('a.{b,c}.{d,e}.f'), ['a.b.d.f', 'a.b.e.f', 'a.c.d.f', 'a.c.e.f'], `('a.{b,c}.{d,e}.f') -> ['a.b.d.f', 'a.b.e.f', 'a.c.d.f', 'a.c.e.f']`);
});