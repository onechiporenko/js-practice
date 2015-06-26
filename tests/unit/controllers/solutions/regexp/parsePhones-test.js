import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.parsePhones', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones(''), [], `('') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('abc'), [], `('abc') -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('1234567'), ['1234567'], `('1234567') -> ['1234567']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('1234567 123-45-67 123-4567'), ['1234567', '123-45-67', '123-4567'], `('1234567 123-45-67 123-4567') -> ['1234567', '123-45-67', '123-4567']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('abc1234567'), ['1234567'], `('abc1234567') -> ['1234567']`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('1234567abc'), ['1234567'], `('1234567abc') -> ['1234567']`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('123--4567abc'), [], `('123--4567abc') -> []`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('123-45--67abc'), [], `('123-45--67abc') -> []`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('123--45-67abc'), [], `('123--45-67abc') -> []`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.parsePhones('123--45--67abc'), [], `('123--45--67abc') -> []`);
});