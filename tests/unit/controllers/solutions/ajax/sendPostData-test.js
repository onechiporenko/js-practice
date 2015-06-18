import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:solutions/ajax', 'solutions.ajax.sendPostData', {

  beforeEach: function () {
    $.mockjax({
      url: '/tests/myscript',
      type: 'POST'
    });
  }
});

test('test1', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.sendPostData({a: 1});
  });
  assert.equal($.mockjax.mockedAjaxCalls().length, 1, 'One ajax-call');
  assert.equal($.mockjax.mockedAjaxCalls()[0].type, "POST", 'with type POST');
  assert.deepEqual($.mockjax.mockedAjaxCalls()[0].data, {a: 1}, `request data is {a: 1}`);
});

test('test2', function(assert) {
  var controller = this.subject();
  Ember.run(function () {
    controller.sendPostData({});
  });
  assert.equal($.mockjax.mockedAjaxCalls().length, 1, 'One ajax-call');
  assert.equal($.mockjax.mockedAjaxCalls()[0].type, "POST", 'with type POST');
  assert.deepEqual($.mockjax.mockedAjaxCalls()[0].data, {}, `request data is {}`);
});