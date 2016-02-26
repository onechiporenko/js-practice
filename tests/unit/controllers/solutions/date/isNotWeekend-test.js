import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isNotWeekend', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421572135303)), false, `(Sun Jan 18 2015) -> false`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421531135303)), false, `(Sat Jan 17 2015) -> false`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421431135303)), true, `(Fri Jan 16 2015) -> true`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421331135303)), true, `(Thu Jan 15 2015) -> true`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421231135303)), true, `(Wed Jan 14 2015) -> true`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421131135303)), true, `(Tue Jan 13 2015) -> true`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isNotWeekend(new Date(1421031135303)), true, `(Mon Jan 12 2015) -> true`);
});