import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getEvenChars', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEvenChars('123123'), '213');

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEvenChars(''), '');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEvenChars('abab'), 'bb');
});