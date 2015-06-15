import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.getCommonKeys', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCommonKeys({}, {}), [], '({}, {}) -> []');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCommonKeys({a: 1}, {}), [], '({a: 1}, {}) -> []');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCommonKeys({}, {a: 1}), [], '{}, {a: 1} -> []');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCommonKeys({a: 2, b: false, c: null}, {a: 0, b: '', c: 1}), ['a', 'b', 'c'], '({a: 2, b: false, c: null}, {a: 0, b: \'\', c: 1}) -> [\'a\', \'b\', \'c\']');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCommonKeys({a: 2, hasOwnProperty: 1}, {a: 1, toString: 2}), ['a'], '({a: 2, hasOwnProperty: 1}, {a: 1, toString: 2}) -> [\'a\'])');
});