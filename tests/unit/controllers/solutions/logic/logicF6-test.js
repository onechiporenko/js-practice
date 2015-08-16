import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/logic', 'solutions.logic.logicF6', {});

var tests = [
  [true,true,true,false],
  [true,true,false,false],
  [true,false,true,false],
  [true,false,false,true],
  [false,true,true,false],
  [false,true,false,false],
  [false,false,true,false],
  [false,false,false,false]
];

for (let i = 0; i < tests.length; i++)
  test('test' + (i + 1), function(assert) {
    var controller = this.subject();
    let test = tests[i];
    assert.equal(controller.logicF6(test[0], test[1], test[2]), test[3], `(${test[0]}, ${test[1]}, ${test[2]}) -> ${test[3]}`);
  });