import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.checkIsNone', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsNone(null), true, '(null) -> true');
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsNone(), true, '() -> true');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkIsNone(undefined), true, '(undefined) -> true');
});
