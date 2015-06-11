import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.isPalindrome', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.isPalindrome('abca'), false);

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.isPalindrome(''), true);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.isPalindrome('abccba'), true);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.isPalindrome('abcdcba'), true);
});