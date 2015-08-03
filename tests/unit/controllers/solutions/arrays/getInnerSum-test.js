import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getInnerSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerSum([
    [
      [1,1],[1,1]
    ],
    [
      [1,1],[1,2]
    ]
  ]), 0, `([[[1,1],[1,1]],[[1,1],[1,2]]]) -> 0`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerSum([
    [
      [1,1],[1,1,1]
    ],
    [
      [1,1],[1,2,1]
    ]
  ]), 0, `([[[1,1],[1,1,1]],[[1,1],[1,2,1]]]) -> 0`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerSum([
    [
      [1,1],[1,1]
    ],
    [
      [1,1],[1,2]
    ],
    [
      [1,1],[1,2]
    ]
  ]), 0, `([[[1,1],[1,1]],[[1,1],[1,2]],[[1,1],[1,2]]]) -> 0`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerSum([
    [
      [0,0,0],[0,0,0],[0,0,0]
    ],
    [
      [0,0,0],[0,2,0],[0,0,0]
    ],
    [
      [0,0,0],[0,0,0],[0,0,0]
    ]
  ]), 2, `3x3x3 -> 2`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getInnerSum([
    [
      [0,0,0],[0,0,0],[0,0,0]
    ],
    [
      [0,0,0],[0,6,0],[0,0,0]
    ],
    [
      [0,0,0],[0,6,0],[0,0,0]
    ],
    [
      [0,0,0],[0,0,0],[0,0,0]
    ]
  ]), 12, `4x3x3 -> 12`);
});