import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getAsciiCodesSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getAsciiCodesSum('abc'), 97 + 98 + 99, `('abc') -> 294`);

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getAsciiCodesSum(''), 0, `('') -> 0`);
});