import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.isSingleLine', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isSingleLine('aBcDeF'), true, `('aBcDeF') -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isSingleLine('aaaaa\n'), false, `('aaaaa\n') -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isSingleLine('\naaaaa'), false, `('\naaaaa') -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isSingleLine('AbC\ndEf'), false, `('AbC\ndEf') -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isSingleLine('Ab\rCdEf'), true, `('Ab\rCdEf') -> true`);
});