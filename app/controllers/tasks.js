import Ember from 'ember';

export default Ember.ArrayController.extend({

  queryParams: ['chapter'],

  chapter: null,

  needs: Ember.computed(function () {
    return this.store.all('chapter').filterBy('section', 'controllers').map(chapter => {
      return 'solutions/' + chapter.get('id');
    });
  }),

  chapters: Ember.computed(function () {
    return this.store.all('chapter');
  }),

  chapterModel: Ember.computed('chapter', function () {
    var chapter = this.get('chapter');
    if (chapter) {
      return this.store.find('chapter', chapter);
    }
  }),

  filteredTasks: Ember.computed('chapter', 'model', function() {
    var chapter = this.get('chapter');
    var tasks = this.get('model');
    return chapter ? tasks.filterBy('chapter.id', chapter) : tasks;
  })

});
