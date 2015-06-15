import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.smartInsert', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartInsert('abcfg', 'de', 3), 'abcdefg', `('abcfg', 'de', 3) -> 'abcdefg'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartInsert('abc', 'de', 0), 'abcde', `('abc', 'de', 0) -> 'abcde'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartInsert('abc', 'de', 4), 'abc', `('abc', 'de', 4) -> 'abc'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartInsert('abc', 'de', -1), 'abc', `('abc', 'de', -1) -> 'abc'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartInsert('abc', '', 2), 'abc', `('abc', '', 2) -> 'abc'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartInsert('', 'abc', 0), 'abc', `('', 'abc', 0) -> 'abc'`);
});