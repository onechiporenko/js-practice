import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.isPalindrome', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isPalindrome('abca'), false, `('abca') -> false`);

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isPalindrome(''), true, `('') -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isPalindrome('abccba'), true, `('abccba') -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isPalindrome('abcdcba'), true, `('abcdcba') -> true`);
});