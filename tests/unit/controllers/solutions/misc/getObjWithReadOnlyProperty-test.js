import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

'use strict';

moduleFor('controller:solutions/misc', 'solutions.misc.getObjWithReadOnlyProperty', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getObjWithReadOnlyProperty('k', 'v').k, 'v', `key is defined`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var ret = controller.getObjWithReadOnlyProperty('k', 'v');
  assert.throws(function () {ret.k = 1;}, `ret.k = 1`);
});

test('test3', function(assert) {
  var controller = this.subject();
  var ret = controller.getObjWithReadOnlyProperty('k', 'v');
  assert.throws(function () {ret['k'] = 1;}, `ret['k'] = 1`);
});