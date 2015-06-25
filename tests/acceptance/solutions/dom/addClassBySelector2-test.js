import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.addClassBySelector2', {

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
    click('button.addClassBySelector2');
    andThen(function () {
      var i = $('.addClassBySelector2 i.aa.bfg');
      assert.equal(i.length, 2, 'К нужным i добавлен класс');
      assert.equal($('.addClassBySelector2 i.bfg').length, 2, 'К нужным i добавлен класс');
    });
  });
});