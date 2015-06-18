import Ember from 'ember';

export default Ember.Controller.extend({

  checkParametersCount: Ember.B,

  execSecondParameter: Ember.B,

  callIfExists: function () {
    var func = arguments[0];
    if(Ember.typeOf(Math[func]) === 'function') {
      Math[func].apply(Math, Array.prototype.slice.call(arguments, 1));
    }
  }

});
