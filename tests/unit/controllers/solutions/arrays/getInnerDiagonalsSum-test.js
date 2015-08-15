import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getInnerDiagonalsSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerDiagonalsSum([[
      [1,0,1],[0,0,0],[1,0,1]
    ],
    [
      [0,0,0],[0,1,0],[0,0,0]
    ],
    [
      [1,0,1],[0,0,0],[1,0,1]
    ]]), 9, `3x3x3 -> 9`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerDiagonalsSum([[
      [0,1,0],[1,1,1],[0,1,0]
    ],
    [
      [1,1,1],[1,0,1],[1,1,1]
    ],
    [
      [0,1,0],[1,1,1],[0,1,0]
    ]]), 0, `3x3x3 -> 0`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerDiagonalsSum([
    [
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ],
    [
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1]
    ]
  ]), 16, `4x4x4 -> 16`);
});

test('test4', function(assert) {

  var controller = this.subject();
  assert.equal(controller.getInnerDiagonalsSum([
    [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1]
    ]
  ]), 17, `5x5x5 -> 17`);

});

test('test5', function(assert) {

  var controller = this.subject();
  assert.equal(controller.getInnerDiagonalsSum([
    [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0]
    ],
    [
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1]
    ],
    [
      [0, 1, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 1, 1, 1, 0]
    ]
  ]), 0, `5x5x5 -> 0`);

});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerDiagonalsSum([
    [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 0]
    ],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 1, 1, 1]
    ],
    [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 1, 1, 0]
    ]
  ]), 0, `4x4x4 -> 0`);
});