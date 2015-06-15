import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getReversed', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getReversed('abcdef'), 'fedcba', `('abcdef') -> 'fedcba'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getReversed(''), '', `('') -> ''`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getReversed('abcde'), 'edcba', `('abcde') -> 'edcba'`);
});