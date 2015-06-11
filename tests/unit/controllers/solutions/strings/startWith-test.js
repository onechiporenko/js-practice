import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.startWith', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.startWith('ababab', 'ab'), true);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.startWith('cabaabb', 'ab'), false);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.startWith('', 'ab'), false);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.startWith('', ''), false);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.startWith('abab', ''), false);
});