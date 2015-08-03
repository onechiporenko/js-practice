import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/numbers', 'solutions.numbers.generateIpsRange', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('0.0.0.0', '0.0.0.2'), ['0.0.0.0', '0.0.0.1', '0.0.0.2'], `('0.0.0.0', '0.0.0.2') -> ['0.0.0.0', '0.0.0.1', '0.0.0.2']`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('0.0.1.0', '0.0.1.2'), ['0.0.1.0', '0.0.1.1', '0.0.1.2'], `('0.0.1.0', '0.0.1.2') -> ['0.0.1.0', '0.0.1.1', '0.0.1.2']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('0.1.0.0', '0.1.0.2'), ['0.1.0.0', '0.1.0.1', '0.1.0.2'], `('0.1.0.0', '0.1.0.2') -> ['0.1.0.0', '0.1.0.1', '0.1.0.2']`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('1.0.0.0', '1.0.0.2'), ['1.0.0.0', '1.0.0.1', '1.0.0.2'], `('1.0.0.0', '1.0.0.2') -> ['1.0.0.0', '1.0.0.1', '1.0.0.2']`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('1.0.0.255', '1.0.1.1'), ['1.0.0.255', '1.0.1.0', '1.0.1.1'], `('1.0.0.255', '1.0.1.1') -> ['1.0.0.255', '1.0.1.0', '1.0.1.1']`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('1.0.255.255', '1.1.0.1'), ['1.0.255.255', '1.1.0.0', '1.1.0.1'], `('1.0.255.255', '1.1.0.1') -> ['1.0.255.255', '1.1.0.0', '1.1.0.1']`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.generateIpsRange('1.255.255.255', '2.0.0.1'), ['1.255.255.255', '2.0.0.0', '2.0.0.1'], `('1.255.255.255', '2.0.0.1'), ['1.255.255.255', '2.0.0.0', '2.0.0.1']`);
});