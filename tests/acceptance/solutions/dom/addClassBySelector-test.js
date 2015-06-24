import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.addClassBySelector', {

  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }

});

test('test1', function(assert) {
  visit('/solutions/dom');
  andThen(function() {
    click('button.addClassBySelector');
    andThen(function () {
      var a = $('.addClassBySelector a.aa.pwned');
      assert.equal(a.length, 2, 'К нужным ссылкам добавлен класс');
      assert.equal($('.addClassBySelector a.pwned'), 2, 'К нужным ссылкам добавлен класс');
    });
  });
});