import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/misc', 'solutions.misc.smartSumWithChains', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSumWithChains(1).c1.c2.c3.sum(2), 3, `(1).c1.c2.c3.sum(2) -> 3`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSumWithChains(-1).c1.c2.sum(1), 0, `(-1).c1.c2.sum(1) -> 0`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSumWithChains(-1).sum(1), 0, `(-1).sum(1) -> 0`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSumWithChains(-1).c1.c1.c1.sum(1), 0, `(-1).c1.c1.c1.sum(1) -> 0`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSumWithChains(-1).c3.c2.c1.sum(1), 0, `(-1).c3.c2.c1.sum(1) -> 0`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.smartSumWithChains(-1).c2.c1.c3.sum(1), 0, `(-1).c2.c1.c3.sum(1) -> 0`);
});

test('test7', function(assert) {
  var controller = this.subject();
  var r = controller.smartSumWithChains(-1);
  assert.throws(function () {r.c1 = {};}, `try to set c1 throws an error`);
  assert.throws(function () {r.c2 = {};}, `try to set c2 throws an error`);
  assert.throws(function () {r.c3 = {};}, `try to set c3 throws an error`);
});
