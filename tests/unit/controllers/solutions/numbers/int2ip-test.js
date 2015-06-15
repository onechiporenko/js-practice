import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.int2ip', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.int2ip, `(0) -> '0.0.0.0'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.int2ip(1), '0.0.0.1', `(1) -> '0.0.0.1'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.int2ip(2130706433), '127.0.0.1', `(2130706433) -> '127.0.0.1'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.int2ip(4294967295), '255.255.255.255', `(4294967295) -> '255.255.255.255'`);
});