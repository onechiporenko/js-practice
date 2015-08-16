import Ember from 'ember';

function parseTable(tableJson) {
  var output = '<table class="table table-striped table-bordered">';
  if (tableJson.head) {
    output += '<thead><tr>';
    for (let i = 0; i < tableJson.head.length; i++) {
      output += '<th>' + ('' + tableJson.head[i]) +  '</th>';
    }
    output += '</thead>';
  }
  if (tableJson.body) {
    output += '<tbody>';
    for (let i = 0; i < tableJson.body.length; i++) {
      output += '<tr>';
      for (let j = 0; j < tableJson.body[i].length; j++) {
        output += '<td>' + ('' + tableJson.body[i][j]) + '</td>';
      }
      output += '</tr>';
    }
    output += '</tbody>';
  }
  return output += '</tr></table>';
}

export function outputDescription(params/*, hash*/) {
  var task = params[0];
  var html = task.get('additionalHtml.items');
  var output = task.get('description');
  if (Array.isArray(html)) {
    html.forEach(function(obj) {
      if (obj.tag == 'table') {
        output += parseTable(obj.inner);
      }
    });
  }
  return output;
}

export default Ember.Helper.helper(outputDescription);
