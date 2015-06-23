import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.addCustomClass', {

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
    click('button.addCustomClass');
    andThen(function () {
      var li = $('.addCustomClass li');
      assert.ok(li.length > 0, 'Элементы списков существуют');
      assert.equal(li.not('.abc').length, 0, 'У всех элементов списков есть нужный класс');
    });
  });
});