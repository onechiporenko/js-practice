import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.isEqualIgnoreCase', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isEqualIgnoreCase('aBcDeF', 'AbCdEf'), true);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isEqualIgnoreCase('', ''), true);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isEqualIgnoreCase('AbCdEf', 'abcdef'), true);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isEqualIgnoreCase('AbCdEf', 'AbCdEf'), true);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isEqualIgnoreCase('AbCdEf', 'adcedd'), false);
});