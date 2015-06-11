import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getChunks', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getChunks('abcabc', 2), ['ab','ca','bc']);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getChunks('', 2), ['']);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getChunks('abcab', 2), ['ab','ca','b']);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getChunks('abcabc', 1), ['a', 'b','c','a','b','c']);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getChunks('', 1), ['']);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getChunks('abcab', 3), ['abc','ab']);
});