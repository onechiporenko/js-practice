import Ember from 'ember';

const {
  on,
  run,
  observer
} = Ember;

export default Ember.View.extend({

  afterInsert: on('didInsertElement', function () {
    this.highlight();
  }),

  highlight: observer('controller.{chapter,filteredTasks.length}', function () {
    run.next(function () {
      Prism.highlightAll();
    });
  })

});