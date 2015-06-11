import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getEntriesCount', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEntriesCount('ababab', 'ab'), 3);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEntriesCount('abaabb', 'ab'), 2);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEntriesCount('', 'ab'), 0);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEntriesCount('', ''), 0);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEntriesCount('abab', ''), 0);
});