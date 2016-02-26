import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isToday', {});

test('test1', function(assert) {
  var controller = this.subject();
  var date = new Date();
  assert.equal(controller.isToday(date), true, `(today) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var date = new Date();
  date.setDate(date.getDate() - 1);
  assert.equal(controller.isToday(date), false, `(yesterday) -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var date = new Date();
  date.setDate(date.getDate() + 1);
  assert.equal(controller.isToday(date), false, `(tomorrow) -> false`);
});