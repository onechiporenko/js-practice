import Ember from 'ember';

export default Ember.Controller.extend({

  checkBit: Ember.B,

  checkNumberBinaryForm: function(a) {
    var nearestPower2 = Math.floor(Math.log2(a));
    var fl = true;
    for (var i = nearestPower2; i >= 0 ; i--) {
      if (!(fl ^ (a & Math.pow(2, i)) > 0)) {
        fl = !fl;
      }
      else {
        return false;
      }
    }
    return true;
  }

});
