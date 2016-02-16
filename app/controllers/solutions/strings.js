import Ember from 'ember';

function _splitKey(key) {
  var insideBraces = false;
  var currentWord = '';
  var keys = [];
  for (var i = 0; i < key.length; i++) {
    currentWord += key[i];
    if (key[i] === '{') {
      insideBraces = true;
      continue;
    }
    if (key[i] === '}') {
      insideBraces = false;
      continue;
    }
    if (key[i] === '.' && !insideBraces) {
      keys.push(currentWord.slice(0, -1));
      currentWord = '';
    }
  }
  keys.push(currentWord);
  return keys;
}

export default Ember.Controller.extend({

  /**
   *
   */
  str2obj: Ember.B,

  /**
   *
   */
  isPalindrome: Ember.B,

  /**
   *
   */
  superTrim: Ember.B,

  /**
   *
   */
  getUniqueCharsNumber: Ember.B,

  /**
   *
   */
  getEvenChars: Ember.B,

  /**
   *
   */
  getAsciiCodesSum: Ember.B,

  /**
   *
   */
  sortByAsciiCode: Ember.B,

  /**
   *
   */
  getCommonPath: Ember.B,

  /**
   *
   */
  getDomainLevel: Ember.B,

  /**
   *
   */
  parsePhone: Ember.B,

  /**
   *
   */
  getChunks: Ember.B,

  /**
   *
   */
  getReversed: Ember.B,

  /**
   *
   */
  getEntriesCount: Ember.B,

  /**
   *
   */
  startWith: Ember.B,

  /**
   *
   */
  isEqualIgnoreCase: Ember.B,

  /**
   *
   */
  isSingleLine: Ember.B,

  /**
   *
   */
  getCommonDomain: Ember.B,

  /**
   *
   */
  smartInsert: Ember.B,

  /**
   *
   */
  getLongest: Ember.B,

  /**
   *
   */
  smartConcat: Ember.B,

  /**
   *
   */
  compareVersions: Ember.B,

  /**
   *
   */
  customPad: Ember.B,

  /**
   *
   */
  customPadLeft: Ember.B,

  /**
   *
   */
  customPadRight: Ember.B,

  /**
   *
   */
  dotSplit: Ember.B,

  /**
   *
   */
  getAllPaths2: Ember.B

});
