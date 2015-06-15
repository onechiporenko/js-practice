import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.superTrim', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.superTrim('abca'), 'abca', `('abca') -> 'abca'`);

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.superTrim(''), '', `('') -> ''`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.superTrim('a b\tc\nd\re '), 'abcde', `('a b\\tc\\nd\\re ') -> 'abcde'`);
});