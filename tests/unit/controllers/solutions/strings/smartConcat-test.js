import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.smartConcat', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartConcat('abcde', '1234567'), 'b1d357', `('abcde', '1234567') -> 'b1d357'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartConcat('1234567', 'abcde'), '2a4c6e7', `('1234567', 'abcde') -> '2a4c6e7'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartConcat('1234567', ''), '246', `('1234567', '') -> '246'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartConcat('', 'abcde'), 'ace', `('', 'abcde') -> 'ace'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartConcat('', ''), '', `('', '') -> ''`);
});