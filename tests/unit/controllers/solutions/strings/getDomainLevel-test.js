import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getDomainLevel', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://google.com'), 2);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://google.com/'), 2);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://google.com./'), 2);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://google.com.'), 2);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://google.com'), 2);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://google.com/'), 2);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://google.com./'), 2);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://google.com.'), 2);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://mail.google.com'), 3);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://mail.google.com/'), 3);
});

test('test11', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://mail.google.com./'), 3);
});

test('test12', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('http://mail.google.com.'), 3);
});

test('test13', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://mail.google.com'), 3);
});

test('test14', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://mail.google.com/'), 3);
});

test('test15', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://mail.google.com./'), 3);
});

test('test16', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getDomainLevel('https://mail.google.com.'), 3);
});