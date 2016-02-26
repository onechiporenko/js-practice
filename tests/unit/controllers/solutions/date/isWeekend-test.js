import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isWeekend', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421572135303)), true, `(Sun Jan 18 2015) -> true`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421531135303)), true, `(Sat Jan 17 2015) -> true`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421431135303)), false, `(Fri Jan 16 2015) -> false`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421331135303)), false, `(Thu Jan 15 2015) -> false`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421231135303)), false, `(Wed Jan 14 2015) -> false`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421131135303)), false, `(Tue Jan 13 2015) -> false`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.isWeekend(new Date(1421031135303)), false, `(Mon Jan 12 2015) -> false`);
});