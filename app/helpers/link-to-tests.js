import Ember from 'ember';

export function linkToTests(params/*, hash*/) {
  var chapter = params[0];
  var methodName = params[1];
  return '<a href="/tests/index.html?module=solutions.' + chapter + '.' + methodName + '&nojshint&&nocontainer" target="_blank">Проверить тесты</a>';
}

export default Ember.Helper.helper(linkToTests);
