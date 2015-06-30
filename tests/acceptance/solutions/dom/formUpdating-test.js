import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.formUpdating', {

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
    click('button.formUpdating');
    andThen(function () {
      var checkboxes = $('.formUpdating input[type=checkbox]');
      var radio = $('.formUpdating input[type=radio]');
      var buttons = $('.formUpdating input[type=button], .formUpdating button');

      assert.ok(checkboxes.length > 0, 'Checkboxes существуют');
      assert.equal(checkboxes.not('.chbx').length, checkboxes.length, 'Checkboxes без класса chbx');

      assert.ok(radio.length > 0, 'Radio существуют');
      assert.equal($('.formUpdating input[type=radio][rel=my-cool-radio]').length, radio.length, 'с требуемым атрибутом');

      assert.ok(buttons.length > 0, 'Кнопки существуют');
      assert.equal(buttons.not('.btn').length, 0, 'с классом btn');
    });
  });
});