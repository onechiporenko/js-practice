import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/logic', 'solutions.logic.logicF1', {});

var tests = [
  [true,true,true],
  [true,false,false],
  [false,true,false],
  [false,false,true]
];

for (let i = 0; i < tests.length; i++)
  test('test' + (i + 1), function(assert) {
    var controller = this.subject();
    let test = tests[i];
    assert.equal(controller.logicF1(test[0], test[1]), test[2], `(${test[0]}, ${test[1]}) -> ${test[2]}`);
  });