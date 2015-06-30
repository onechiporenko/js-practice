import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.replaceWithIndex', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceWithIndex(''), '', `('') -> ''`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceWithIndex('abc'), 'abc', `('abc') -> 'abc'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceWithIndex('a*bc'), 'a1bc', `('a*bc') -> 'a1bc'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceWithIndex('a*b*c*'), 'a1b2c3', `('a*b*c*') -> 'a1b2c3'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.replaceWithIndex('*a*b*c*'), '1a2b3c4', `('*a*b*c*') -> '1a2b3c4'`);
});