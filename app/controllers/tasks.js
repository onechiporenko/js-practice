import Ember from 'ember';

const {
  on,
  computed,
  inject,
  defineProperty
} = Ember;

// model -> filteredTasks -> visibleTasks -> sortedTasks
export default Ember.ArrayController.extend({

  queryParams: ['chapter'],

  chapter: null,

  /**
   * Determines if some tasks with some solutions should be hidden
   *
   * @type {boolean}
   * @default false
   */
  showOnlyNotSolved: false,

  needs: computed(function () {
    return this.store.peekAll('chapter').filterBy('section', 'controllers').map(chapter => {
      return 'solutions/' + chapter.get('id');
    });
  }),

  chapters: computed(function () {
    return this.store.peekAll('chapter');
  }),

  chapterModel: computed('chapter', function () {
    var chapter = this.get('chapter');
    if (chapter) {
      return this.store.find('chapter', chapter);
    }
  }),

  filteredTasks: computed('chapter', 'model', 'showOnlyNotSolved', function() {
    var chapter = this.get('chapter');
    var tasks = this.get('model');
    return chapter ? tasks.filterBy('chapter.id', chapter) : tasks;
  }),

  visibleTasks: computed('filteredTasks.[]', 'showOnlyNotSolved', function () {
    var showOnlyNotSolved = this.get('showOnlyNotSolved');
    var filteredTasks = this.get('filteredTasks');
    var self = this;
    return showOnlyNotSolved ? filteredTasks.filter(c => {
      return self.get(c.get('chapter.id'))[c.get('method')] === Ember.B;
    }) : filteredTasks;
  }),

  sortKeys: ['difficulty', 'id'],
  sortedTasks: computed.sort('visibleTasks', 'sortKeys'),

  setup: on('init', function () {
    var self = this;
    // Inject each chapter-controller
    this.store.peekAll('chapter').filterBy('section', 'controllers').forEach(chapter => {
      defineProperty(self, chapter.get('id'), inject.controller('solutions/' + chapter.get('id')));
    });
  })

});
