import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.parsePhone', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+380661234567'), {c: '+38', o: '066', p: '1234567'});
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+38(066)1234567'), {c: '+38', o: '066', p: '1234567'});
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+38 (066) 1234567'), {c: '+38', o: '066', p: '1234567'});
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+38 (066) 123-45-67'), {c: '+38', o: '066', p: '1234567'});
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+38(066)123-45-67'), {c: '+38', o: '066', p: '1234567'});
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+38 066 123-45-67'), {c: '+38', o: '066', p: '1234567'});
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhone('+38 066 1234567'), {c: '+38', o: '066', p: '1234567'});
});