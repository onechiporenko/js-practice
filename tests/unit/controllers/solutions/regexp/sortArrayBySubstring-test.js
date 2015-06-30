import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.sortArrayBySubstring', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.sortArrayBySubstring([]), [], `([]) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.sortArrayBySubstring(['abc $ 12.33', '$4.54', 'abc $6.11 def']), ['$4.54', 'abc $6.11 def', 'abc $ 12.33'], `(['abc $ 12.33', '$4.54', 'abc $6.11 def']) -> ['$4.54', 'abc $6.11 def', 'abc $ 12.33']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.sortArrayBySubstring(['$4.54']), ['$4.54'], `(['$4.54']) -> ['$4.54']`);
});