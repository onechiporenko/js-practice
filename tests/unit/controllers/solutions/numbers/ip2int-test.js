import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.ip2int', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.ip2int('0.0.0.0'), 0, `('0.0.0.0') -> 0`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.ip2int('0.0.0.1'), 1, `('0.0.0.1') -> 1`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.ip2int('127.0.0.1'), 2130706433, `('127.0.0.1') -> 2130706433`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.ip2int('255.255.255.255'), 4294967295, `('255.255.255.255') -> 4294967295`);
});