import DS from 'ember-data';

export default DS.Model.extend({

  chapter: DS.belongsTo('chapter'),

  description: DS.attr('string'),

  method: DS.attr('string')

});
