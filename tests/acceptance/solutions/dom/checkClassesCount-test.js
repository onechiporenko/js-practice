import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.checkClassesCount', {

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
    click('button.checkClassesCount');
    andThen(function () {
      var elments = $('.checkClassesCount .aa.zxc');
      assert.equal(elments.length, 4, 'Необходимые элементы есть на странице');
      assert.equal($('.checkClassesCount .zxc').length, 4, 'Требуемый класс есть только у нужных элементов');
    });
  });
});