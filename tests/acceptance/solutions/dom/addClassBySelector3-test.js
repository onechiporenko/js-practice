import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.addClassBySelector3', {

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
    click('button.addClassBySelector3');
    andThen(function () {
      var p = $('.addClassBySelector3 p.aa.egm');
      assert.equal(p.length, 6, 'К нужным p добавлен класс');
      assert.equal($('.addClassBySelector3 p.egm').length, 6, 'К нужным p добавлен класс');
    });
  });
});