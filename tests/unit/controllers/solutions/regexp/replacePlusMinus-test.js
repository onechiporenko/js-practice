import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.replacePlusMinus', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replacePlusMinus(''), '', `('') -> ''`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replacePlusMinus('+'), '{}', `('+') -> '{}'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replacePlusMinus('-'), '{}', `('-') -> '{}'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replacePlusMinus('+-'), '{}{}', `('+-') -> '{}{}'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replacePlusMinus('+|-'), '{}|{}', `('+|-') -> '{}|{}'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replacePlusMinus('-+|-+'), '{}{}|{}{}', `('-+|-+') -> '{}{}|{}{}'`);
});
