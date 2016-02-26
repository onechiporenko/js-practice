import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isTomorrow', {});

test('test1', function(assert) {
  var controller = this.subject();
  var date = new Date();
  assert.equal(controller.isTomorrow(date), false, `(today) -> false`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var date = new Date();
  date.setDate(date.getDate() - 1);
  assert.equal(controller.isTomorrow(date), false, `(yesterday) -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var date = new Date();
  date.setDate(date.getDate() + 1);
  assert.equal(controller.isTomorrow(date), true, `(tomorrow) -> true`);
});