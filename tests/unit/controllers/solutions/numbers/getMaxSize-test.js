import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.getMaxSize', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxSize(10000), '9.76 KB', `(10000) -> '9.76 KB'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxSize(1048576), '1.00 MB', `(1048576) -> '1.00 MB'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxSize(1610612736), '1.50 GB', `(1610612736) -> '1.50 GB'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxSize(1374389534720), '1.25 TB', `(1374389534720) -> '1.25 TB'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getMaxSize(1970324836974592), '1.75 PB', `(1970324836974592) -> '1.75 PB'`);
});

