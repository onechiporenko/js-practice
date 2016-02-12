import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tasks');
  this.resource('solutions.dom', { path: '/solutions/dom' });
});

export default Router;
