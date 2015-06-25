import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.removeFirst', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeFirst('[a1_b2]abc[abc]123'), 'abc[abc]123', `('[a1_b2]abc[abc]123') -> 'abc[abc]123'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeFirst('abc[abc]123'), 'abc[abc]123', `('abc[abc]123') -> 'abc[abc]123'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeFirst('[]'), '', `('[]') -> ''`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeFirst('[Ab1_]'), '', `('[Ab1_]') -> ''`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.removeFirst('[AbC_120_cBa]someString'), 'someString', `('[AbC_120_cBa]someString') -> 'someString'`);
});