import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   *
   * @typedef {{keyField: {f: string}[]}} innerObject
   * @param {innerObject[]} c1
   * @param {innerObject[]} c2
   * @returns {{el1: innerObject, el2: innerObject}[]}
   * @method searchObjectPairs
   */
  searchObjectPairs: function (c1, c2) {
    var linked = [];
    for (var i = 0; i < c1.length; i++) {
      var el1 = c1[i];
      for (var j = 0; j < c2.length; j++) {
        var el2 = c2[j];
        var fl = true;
        if (el1.keyField.length !== el2.keyField.length) {
          fl = false;
        }
        if (fl) {
          for (var k = 0; k < el2.keyField.length; k++) {
            if (el1.keyField[k].f !== el2.keyField[k].f) {
              fl = false;
              break;
            }
          }
        }
        if (fl) {
          linked.push({
            el1: el1,
            el2: el2
          });
          break;
        }
      }
    }
    return linked;
  },

  searchObjectPairs2: Ember.B

});
