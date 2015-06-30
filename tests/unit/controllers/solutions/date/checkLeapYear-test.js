import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.checkLeapYear', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkLeapYear(new Date(1341063971245)), true, `(new Date(1341063971245)) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.checkLeapYear(new Date(1435671982138)), false, `(new Date(1435671982138)) -> false`);
});