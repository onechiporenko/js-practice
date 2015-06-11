import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getCommonDomain', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('adds.google.com', 'maps.google.com'), 'google.com');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('s.adds.google.com', 'adds.google.com'), 'adds.google.com');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('google.com', 'adds.google.com'), 'google.com');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('example22.com', 'adds.google.com'), 'com');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('google.com.tk', 'adds.google.com'), '');
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('', 'adds.google.com'), '');
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('adds.google.com', ''), '');
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonDomain('', ''), '');
});