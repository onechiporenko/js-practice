import Ember from 'ember';

export default Ember.Controller.extend({

  replaceDigits: Ember.B,

  removeFirst: Ember.B,

  removeLast: Ember.B,

  parseList: Ember.B,

  parseList2: Ember.B,

  parsePhones: Ember.B,

  sortArrayBySubstring: Ember.B,

  swapWords: Ember.B,

  replaceWithIndex: Ember.B,

  checkNumberBinaryFormWithRegexp: Ember.B,

  replaceDigits2: Ember.B,

  replacePlusMinus: Ember.B,

  checkIp: Ember.B,

  getCoordinates: Ember.B,

  escapeRegex: function (str) {
    return str.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
  }

});
