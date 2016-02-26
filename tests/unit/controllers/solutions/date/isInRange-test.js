import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isInRange', {});

test('test1', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var today = new Date();
  var tomorrow = new Date(date.setDate(date.getDate() + 1));
  var yesterday = new Date(date.setDate(date.getDate() - 2));
  assert.equal(controller.isInRange(today, yesterday, tomorrow), true, `(today, yesterday, tomorrow) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var today = new Date();
  var tomorrow = new Date(date.setDate(date.getDate() + 1));
  var yesterday = new Date(date.setDate(date.getDate() - 2));
  assert.equal(controller.isInRange(yesterday, today, tomorrow), false, `(yesterday, today, tomorrow) -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var today = new Date();
  var tomorrow = new Date(date.setDate(date.getDate() + 1));
  assert.equal(controller.isInRange(today, today, tomorrow), false, `(today, today, tomorrow) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var today = new Date();
  var tomorrow = new Date(date.setDate(date.getDate() + 1));
  assert.equal(controller.isInRange(tomorrow, today, tomorrow), false, `(tomorrow, today, tomorrow) -> false`);
});