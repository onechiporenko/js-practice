import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getUniqueCharsNumber', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getUniqueCharsNumber('abca'), 3);

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getUniqueCharsNumber(''), 0);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getUniqueCharsNumber('aaaa'), 1);
});