import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.compareVersions', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.ok(controller.compareVersions('1.2.3', '0.0.0'), `('1.2.3', '0.0.0') -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.notOk(controller.compareVersions('0.0.0', '1.2.3'), `('0.0.0', '1.2.3') -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.ok(controller.compareVersions('1.2.3', '1.0.0'), `('1.2.3', '1.0.0') -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.notOk(controller.compareVersions('1.0.0', '1.2.3'), `('1.0.0', '1.2.3') -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.ok(controller.compareVersions('1.2.3', '1.2.0'), `('1.2.3', '1.2.0') -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.notOk(controller.compareVersions('1.2.0', '1.2.3'), `('1.2.0', '1.2.3') -> false`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.ok(controller.compareVersions('1.2.13', '1.2.9'), `('1.2.13', '1.2.9') -> true`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.notOk(controller.compareVersions('1.2.9', '1.2.13'), `('1.2.9', '1.2.13') -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.ok(controller.compareVersions('1.12.13', '1.9.9'), `('1.12.13', '1.9.9') -> true`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.notOk(controller.compareVersions('1.9.9', '1.12.13'), `('1.9.9', '1.12.13') -> false`);
});

test('test11', function(assert) {
  var controller = this.subject();
  assert.ok(controller.compareVersions('12.12.13', '9.9.9'), `('12.12.13', '9.9.9') -> true`);
});

test('test12', function(assert) {
  var controller = this.subject();
  assert.notOk(controller.compareVersions('9.9.9', '12.12.13'), `('9.9.9', '12.12.13') -> false`);
});
