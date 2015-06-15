import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.getFunctionNames', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getFunctionNames({}), [], `({}) -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getFunctionNames({a: Ember.K}), ['a'], `{a: Ember.K}), ['a']`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getFunctionNames({a: Ember.K, b: function () {}, c: Object.prototype.toString}), ['a', 'b', 'c'], `{a: Ember.K, b: function () {}, c: Object.prototype.toString}) -> ['a', 'b', 'c']`);
});
