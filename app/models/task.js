import DS from 'ember-data';
import Ember from 'ember';

const {
  computed
} = Ember;

export default DS.Model.extend({

  chapter: DS.belongsTo('chapter', { async: false }),

  description: DS.attr('string'),

  method: DS.attr('string'),

  additionalHtml: DS.attr(),

  difficulty: DS.attr('number', {defaultValue: 5}),

  type: computed('difficulty', function () {
    const map = {
      1: 'info',
      2: 'info',
      3: 'success',
      4: 'warning',
      5: 'danger'
    };
    const difficulty = this.get('difficulty');
    return 'alert-' + (map[difficulty] || '');
  })

});
