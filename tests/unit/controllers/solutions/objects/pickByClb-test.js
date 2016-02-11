import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.pickByClb', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.pickByClb({a: 1, b: 2, c: 3}, function (v) {return v > 1;}), {b: 2, c: 3}, `{a: 1, b: 2, c: 3}, function (v) {return v > 1;}) -> {b: 2, c: 3}`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.pickByClb({a: 1, b: 2, c: 3}, function (v) {return v % 2 === 0;}), {b: 2}, `{a: 1, b: 2, c: 3}, function (v) {return v % 2 === 0;}) -> {b: 2}`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.pickByClb({a: 1, b: 2, c: 3}, function (v) {return v % 2 !== 0;}), {a: 1, c: 3}, `{a: 1, b: 2, c: 3}, function (v) {return v % 2 !== 0;}) -> {a: 1, c: 3}`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.pickByClb({}, function () {return true;}), {}, `{}, function () {return true;}) -> {}`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.pickByClb({a: 1, b: 2, c: 3}, function () {return true;}), {a: 1, b: 2, c: 3}, `{a: 1, b: 2, c: 3}, function () {return true;}) -> {a: 1, b: 2, c: 3}`);
});