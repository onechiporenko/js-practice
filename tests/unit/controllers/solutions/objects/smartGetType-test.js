import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.smartGetType', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(''), 'string', `('') -> 'string'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(), 'undefined', `() -> 'undefined'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(undefined), 'undefined', `(undefined) -> 'undefined'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(null), 'null', `(null) -> 'null'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(123), 'number', `(123) -> 'number'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(true), 'boolean', `(true) -> 'boolean'`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(function() {}), 'function', `(function() {}) -> 'function'`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType([1,2,3]), 'array', `([1,2,3]) -> 'array'`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(/abc/), 'regexp', `(/abc/) -> 'regexp'`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType({}), 'object', `({}) -> 'object'`);
});

test('test11', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(new Error('error')), 'error', `(new Error('error')) -> 'error'`);
});

test('test12', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartGetType(new Date()), 'date', `(new Date()) -> 'date'`);
});
