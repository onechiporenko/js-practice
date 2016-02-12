import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

'use strict';

moduleFor('controller:solutions/misc', 'solutions.misc.getObjWithCustomGetter', {

  beforeEach: function () {
    sinon.stub(console, 'log', Ember.K);
  },

  afterEach: function () {
    console.log.restore();
  }

});

test('test1', function(assert) {
  var controller = this.subject();
  var obj = controller.getObjWithCustomGetter('k', 'v');
  var b = obj.k;
  assert.ok(console.log.calledOnce, `object-notation -> message is shown`);
  assert.equal(b, 'v', `value is valid`);
});

test('test2', function(assert) {
  var controller = this.subject();
  var obj = controller.getObjWithCustomGetter('k', 'v');
  var b = obj['k'];
  assert.ok(console.log.calledOnce, `array-notation -> message is shown`);
  assert.equal(b, 'v', `value is valid`);
});