import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.dotSplit', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.dotSplit('a.b.c'), ['a', 'b', 'c'], `('a.b.c') -> ['a', 'b', 'c']`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.dotSplit('a.{b.c}.d'), ['a', '{b.c}', 'd'], `('a.{b.c}.d') -> ['a', '{b.c}', 'd']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.dotSplit('a.{b.c,d.e}.f'), ['a', '{b.c,d.e}', 'f'], `('a.{b.c,d.e}.f') -> ['a', '{b.c,d.e}', 'f']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.dotSplit('a.{b.c}.d.{e.f}'), ['a', '{b.c}', 'd', '{e.f}'], `('a.{b.c}.d.{e.f}') -> ['a', '{b.c}', 'd', '{e.f}']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.dotSplit('a.{b.c}.{d.e}.f'), ['a', '{b.c}', '{d.e}', 'f'], `('a.{b.c}.{d.e}.f') -> ['a', '{b.c}', '{d.e}', 'f']`);
});