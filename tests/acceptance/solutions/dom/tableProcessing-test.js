import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../../helpers/start-app';

var application;

module('solutions.dom.tableProcessing', {

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
    click('button.tableProcessing');
    andThen(function () {
      var theadRows = $('.tableProcessing table thead tr');
      var tbodyRows = $('.tableProcessing table tbody tr');
      var tfootRows = $('.tableProcessing table tfoot tr');
      assert.ok(theadRows.length > 0, 'Thead contains tr');
      assert.equal(theadRows.not('.c1').not('.c2').length, theadRows.length, 'Thead rows without classes');

      assert.ok(tbodyRows.length > 0, 'Tbody contains tr');
      assert.equal(tbodyRows.filter(':even').length, tbodyRows.filter('.c1').length, 'Even-rows have c1');
      assert.equal(tbodyRows.filter(':odd').length, tbodyRows.filter('.c2').length, 'Odd-rows have c2');

      assert.ok(tfootRows.length > 0, 'Tfoot contains tr');
      assert.equal(tfootRows.not('.c1').not('.c2').length, tfootRows.length, 'Tfoot rows without classes');
    });
  });
});