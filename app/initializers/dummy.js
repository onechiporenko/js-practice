import Ember from 'ember';
export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.B = function () {
    'no solution';
  };
}

export default {
  name: 'dummy',
  initialize: initialize
};
