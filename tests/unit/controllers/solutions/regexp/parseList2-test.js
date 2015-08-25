import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.parseList2', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[2-4]d.efg'), ['abc2d.efg', 'abc3d.efg', 'abc4d.efg'], `('abc[2-4]d.efg') -> ['abc2d.efg', 'abc3d.efg', 'abc4d.efg']`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[1-2]d.efg'), ['abc1d.efg', 'abc2d.efg'], `('abc[1-2]d.efg') -> ['abc1d.efg', 'abc2d.efg']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[3-3]d.efg'), ['abc3d.efg'], `('abc[3-3]d.efg') -> ['abc3d.efg']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[13-14]d.efg'), ['abc13d.efg', 'abc14d.efg'], `('abc[13-14]d.efg') -> ['abc13d.efg', 'abc14d.efg']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[119-121]d.efg'), ['abc119d.efg', 'abc120d.efg', 'abc121d.efg'], `('abc[119-121]d.efg') -> ['abc119d.efg', 'abc120d.efg', 'abc121d.efg']`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[1-1]d[1-2].efg'), ['abc1d1.efg', 'abc1d2.efg'], `('abc[1-1]d[1-2].efg') -> ['abc1d1.efg', 'abc1d2.efg']`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[1-2]d[1-2].efg'), ['abc1d1.efg', 'abc1d2.efg', 'abc2d1.efg', 'abc2d2.efg'], `('abc[1-2]d[1-2].efg') -> ['abc1d1.efg', 'abc1d2.efg', 'abc2d1.efg', 'abc2d2.efg']`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[1-2]d[2-3].efg'), ['abc1d2.efg', 'abc1d3.efg', 'abc2d2.efg', 'abc2d3.efg'], `('abc[1-2]d[2-3].efg') -> ['abc1d2.efg', 'abc1d3.efg', 'abc2d2.efg', 'abc2d3.efg']`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[1-2]d[2-3].efg[3-4]'), ["abc1d2.efg3",
    "abc1d2.efg4",
    "abc1d3.efg3",
    "abc1d3.efg4",
    "abc2d2.efg3",
    "abc2d2.efg4",
    "abc2d3.efg3",
    "abc2d3.efg4"], `('abc[1-2]d[2-3].efg[3-4]') -> ["abc1d2.efg3",
  "abc1d2.efg4",
  "abc1d3.efg3",
  "abc1d3.efg4",
  "abc2d2.efg3",
  "abc2d2.efg4",
  "abc2d3.efg3",
  "abc2d3.efg4"]`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parseList2('abc[1-2]d[2-3].efg[3-4][1-2]'), ["abc1d2.efg31","abc1d2.efg32",
    "abc1d2.efg41",
    "abc1d2.efg42",
    "abc1d3.efg31",
    "abc1d3.efg32",
    "abc1d3.efg41",
    "abc1d3.efg42",
    "abc2d2.efg31",
    "abc2d2.efg32",
    "abc2d2.efg41",
    "abc2d2.efg42",
    "abc2d3.efg31",
    "abc2d3.efg32",
    "abc2d3.efg41",
    "abc2d3.efg42"], `('abc[1-2]d[2-3].efg[3-4][1-2]') -> ["abc1d2.efg31","abc1d2.efg32",
    "abc1d2.efg41",
    "abc1d2.efg42",
    "abc1d3.efg31",
    "abc1d3.efg32",
    "abc1d3.efg41",
    "abc1d3.efg42",
    "abc2d2.efg31",
    "abc2d2.efg32",
    "abc2d2.efg41",
    "abc2d2.efg42",
    "abc2d3.efg31",
    "abc2d3.efg32",
    "abc2d3.efg41",
    "abc2d3.efg42"]`);
});