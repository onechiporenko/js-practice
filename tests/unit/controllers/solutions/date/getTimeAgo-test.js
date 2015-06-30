import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.getTimeAgo', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1435666072652), '1 year', `(1388538605000, 1435666072652) -> '1 year'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1293840000000), '3 years', `(1388538605000, 1293840000000) -> '3 years'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388538604000), '1 second', `(1388538605000, 1388538604000) -> '1 second'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388538602000), '3 seconds', `(1388538605000, 1388538602000) -> '3 seconds'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388538535000), '1 minute', `(1388538605000, 1388538535000) -> '1 minute'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388538405000), '3 minutes', `(1388538605000, 1388538405000) -> '3 minutes'`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388534405000), '1 hour', `(1388538605000, 1388534405000) -> '1 hour'`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388531305000), '2 hours', `(1388538605000, 1388531305000) -> '2 hours'`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388401305000), '1 day', `(1388538605000, 1388401305000) -> '1 day'`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1388101305000), '6 days', `(1388538605000, 1388101305000) -> '6 days'`);
});

test('test11', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1387901305000), '1 week', `(1388538605000, 1387901305000) -> '1 week'`);
});

test('test12', function(assert) {
  var controller = this.subject();
assert.equal(controller.getTimeAgo(1388538605000, 1387101305000), '2 weeks', `(1388538605000, 1387101305000) -> '2 weeks'`);
});

test('test13', function(assert) {
  var controller = this.subject();
assert.equal(controller.getTimeAgo(1388538605000, 1385101305000), '1 month', `(1388538605000, 1385101305000) -> '1 month'`);
});

test('test14', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTimeAgo(1388538605000, 1383101305000), '3 months', `(1388538605000, 1383101305000) -> '3 months'`);
});
