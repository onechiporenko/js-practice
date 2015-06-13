import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getWithSubstr', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getWithSubstr([], ''), []);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getWithSubstr(['a'], ''), ['a']);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getWithSubstr(['a', 'abc'], 'bc'), ['abc']);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getWithSubstr(['a', 'abc', 'bca'], 'bc'), ['abc', 'bca']);
});
