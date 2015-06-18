import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),

  tasks: DS.hasMany('task'),

  section: DS.attr('string')

});
