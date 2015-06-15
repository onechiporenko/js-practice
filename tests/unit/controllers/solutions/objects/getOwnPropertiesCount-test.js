import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.getOwnPropertiesCount', {});

var A = Ember.Object.extend({a: 1, b: 2, c: 3});
var B = A.extend({d: 4});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOwnPropertiesCount({}), 0, `({}) -> 0`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOwnPropertiesCount({a: 1, b: 2, c: 3}), 3, `({a: 1, b: 2, c: 3}) -> 3`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getOwnPropertiesCount(B.create({e: 5, f: 6})), 2, `(B.create({e: 5, f: 6})) -> 2`);
});