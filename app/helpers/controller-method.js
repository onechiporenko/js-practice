import Ember from 'ember';

export function controllerMethod(params/*, hash*/) {
  var controller = params[0];
  var solutionControllerName = params[1];
  var methodName = params[2];
  var method = controller.get('controllers.solutions/' + solutionControllerName)[methodName];
  return method ? method.toString() : '';
}

export default Ember.HTMLBars.makeBoundHelper(controllerMethod);
