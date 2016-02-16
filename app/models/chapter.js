import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),

  tasks: DS.hasMany('task'),

  section: DS.attr('string'),

  testsType: DS.attr('string', {defaultValue: 'unit'}),

  renderAsComponent: DS.attr('boolean', {defaultValue: false}),

  componentPath: Ember.computed('renderAsComponent', function() {
    return this.get('renderAsComponent') ? 'solutions/' + this.get('id') : '';
  }),

  isController: Ember.computed.equal('section', 'controllers')

});
