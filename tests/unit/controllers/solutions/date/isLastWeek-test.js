import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isLastWeek', {});

test('test1', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var oneDayAgo = new Date(date.setDate(date.getDate() - 1));
  assert.equal(controller.isLastWeek(oneDayAgo), true, `(oneDayAgo) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var twoDaysAgo = new Date(date.setDate(date.getDate() - 2));
  assert.equal(controller.isLastWeek(twoDaysAgo), true, `(twoDaysAgo) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var threeDaysAgo = new Date(date.setDate(date.getDate() - 3));
  assert.equal(controller.isLastWeek(threeDaysAgo), true, `(threeDaysAgo) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var fourDaysAgo = new Date(date.setDate(date.getDate() - 4));
  assert.equal(controller.isLastWeek(fourDaysAgo), true, `(fourDaysAgo) -> true`);
});

test('test5', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var fiveDaysAgo = new Date(date.setDate(date.getDate() - 5));
  assert.equal(controller.isLastWeek(fiveDaysAgo), true, `(fiveDaysAgo) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var sixDaysAgo = new Date(date.setDate(date.getDate() - 6));
  assert.equal(controller.isLastWeek(sixDaysAgo), true, `(sixDaysAgo) -> true`);
});

test('test7', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var sevenDaysAgo = new Date(date.setDate(date.getDate() - 7) + 1);
  assert.equal(controller.isLastWeek(sevenDaysAgo), true, `(sevenDaysAgo) -> true`);
});

test('test8', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var eightDaysAgo = new Date(date.setDate(date.getDate() - 8));
  assert.equal(controller.isLastWeek(eightDaysAgo), false, `(eightDaysAgo) -> false`);
});

test('test9', function(assert) {
  var controller = this.subject();
  var date = new Date();
  var oneDayAfter = new Date(date.setDate(date.getDate() + 1));
  assert.equal(controller.isLastWeek(oneDayAfter), false, `(oneDayAfter) -> false`);
});