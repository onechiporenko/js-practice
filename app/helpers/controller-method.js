import Ember from 'ember';

export function controllerMethod(params/*, hash*/) {
  var controller = params[0];
  var chapterId = params[1];
  var section = params[2];
  var methodName = params[3];
  var method;
  if (!chapterId) {
    return '';
  }
  if (section === 'views') {
    method = App.NAMESPACES[2].__container__.lookup('view:solutions/' + chapterId)[methodName];
  }
  else {
    if (section === 'components') {
      method = App.NAMESPACES[2].__container__.lookup('components:solutions/' + chapterId)[methodName];
    }
    else {
      method = controller.get('controllers.solutions/' + chapterId)[methodName];
    }
  }
  return method ? method.toString() : '';
}

export default Ember.HTMLBars.makeBoundHelper(controllerMethod);
