import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/misc', 'solutions.misc.getObjWithNotEnumProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  var ret = controller.getObjWithNotEnumProperty('k', 'v');
  assert.equal(Object.keys(ret).indexOf('k'), -1, `key is not enumerable`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var ret = controller.getObjWithNotEnumProperty('k', 'v');
  var result = false;
  for (var k in ret) {
    if (k === 'k') {
      result = true;
    }
  }
  assert.equal(result, false, `key is not enumerable`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var ret = controller.getObjWithNotEnumProperty('k', 'v');
  assert.equal(ret.k, 'v', `value is valid`);
});