import DS from 'ember-data';

export default DS.RESTAdapter.extend({

  namespace: 'assets/data/',

  urlForFindAll: function (modelName) {
    return this._super(modelName) + '.json';
  }

});
