import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.sortByAsciiCode', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.sortByAsciiCode('cba'), 'abc', `('cba') -> 'abc'`);

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.sortByAsciiCode(''), '', `('') -> ''`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.sortByAsciiCode('}|{'), '{|}', `('}|{') -> '{|}'`);
});