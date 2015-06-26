import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.parseList', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList('abc[2-4]d.efg'), ['abc2d.efg', 'abc3d.efg', 'abc4d.efg'], `('abc[2-4]d.efg') -> ['abc2d.efg', 'abc3d.efg', 'abc4d.efg']`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList('abc[1-2]d.efg'), ['abc1d.efg', 'abc2d.efg'], `('abc[1-2]d.efg') -> ['abc1d.efg', 'abc2d.efg']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList('abc[3-3]d.efg'), ['abc3d.efg'], `('abc[3-3]d.efg') -> ['abc3d.efg']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList('abc[13-14]d.efg'), ['abc13d.efg', 'abc14d.efg'], `('abc[13-14]d.efg') -> ['abc13d.efg', 'abc14d.efg']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList('abc[119-121]d.efg'), ['abc119d.efg', 'abc120d.efg', 'abc121d.efg'], `('abc[119-121]d.efg') -> ['abc119d.efg', 'abc120d.efg', 'abc121d.efg']`);
});
