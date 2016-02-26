import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isYesterday', {});

test('test1', function(assert) {
  var controller = this.subject();
  var date = new Date();
  assert.equal(controller.isYesterday(date), false, `(today) -> false`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var date = new Date();
  date = new Date(date.setDate(date.getDate() - 1));
  assert.equal(controller.isYesterday(date), true, `(yesterday) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var date = new Date();
  date = new Date(date.setDate(date.getDate() + 1));
  assert.equal(controller.isYesterday(date), false, `(tomorrow) -> false`);
});