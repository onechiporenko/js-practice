import Ember from 'ember';

export default Ember.View.extend({

  afterInsert: Ember.on('didInsertElement', function () {
    this.highlight();
  }),

  highlight: Ember.observer('controller.chapter', function () {
    Ember.run.next(function () {
      Prism.highlightAll();
    });
  })

});