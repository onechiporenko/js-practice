import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.getYearsDiff', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getYearsDiff(0, 0), 0, `(0, 0) -> 0`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getYearsDiff(1420070400000, 0), 2015, `(1420070400000, 0) -> 2015`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getYearsDiff(0, 1420070400000), 2015, `(0, 1420070400000) -> 2015`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getYearsDiff(1388534400000, 1420070400000), 1, `(1388534400000, 1420070400000) -> 1`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getYearsDiff(1420070400000, 1388534400000), 1, `(1420070400000, 1388534400000) -> 1`);
});
