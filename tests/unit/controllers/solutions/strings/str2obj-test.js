import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.str2obj', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.str2obj('abca'), {a: 2, b: 1, c: 1});

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.str2obj(''), {});
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.str2obj('abc-abc'), {a: 2, b: 2, c: 2, '-': 1});
});