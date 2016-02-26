import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isNextWeek', {});

test('test1', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var oneDayAfter = new Date(date.setDate(date.getDate() + 1));
  assert.equal(controller.isNextWeek(oneDayAfter), true, `(oneDayAfter) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var twoDaysAfter = new Date(date.setDate(date.getDate() + 2));
  assert.equal(controller.isNextWeek(twoDaysAfter), true, `(twoDaysAfter) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var threeDaysAfter = new Date(date.setDate(date.getDate() + 3));
  assert.equal(controller.isNextWeek(threeDaysAfter), true, `(threeDaysAfter) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var fourDaysAfter = new Date(date.setDate(date.getDate() + 4));
  assert.equal(controller.isNextWeek(fourDaysAfter), true, `(fourDaysAfter) -> true`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var fiveDaysAfter = new Date(date.setDate(date.getDate() + 5));
  assert.equal(controller.isNextWeek(fiveDaysAfter), true, `(fiveDaysAfter) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var sixDaysAfter = new Date(date.setDate(date.getDate() + 6));
  assert.equal(controller.isNextWeek(sixDaysAfter), true, `(sixDaysAfter) -> true`);
});

test('test7', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var sevenDaysAfter = new Date(date.setDate(date.getDate() + 7) - 1);
  assert.equal(controller.isNextWeek(sevenDaysAfter), true, `(sevenDaysAfter) -> true`);
});

test('test8', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var eightDaysAfter = new Date(date.setDate(date.getDate() + 8));
  assert.equal(controller.isNextWeek(eightDaysAfter), false, `(eightDaysAfter) -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var oneDayAgo = new Date(date.setDate(date.getDate() - 1));
  assert.equal(controller.isNextWeek(oneDayAgo), false, `(oneDayAgo) -> false`);
});