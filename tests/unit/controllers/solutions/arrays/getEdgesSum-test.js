import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getEdgesSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEdgesSum([
    [
      [1,1,1],[1,0,1],[1,1,1]
    ],
    [
      [1,0,1],[0,0,0],[1,0,1]
    ],
    [
      [1,1,1],[1,0,1],[1,1,1]
    ]
  ]), 20, `3x3x3 with 1 where needed -> 20`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEdgesSum([
    [
      [0,0,0],[0,1,0],[0,0,0]
    ],
    [
      [0,1,0],[1,1,1],[0,1,0]
    ],
    [
      [0,0,0],[0,1,0],[0,0,0]
    ]
  ]), 0, `3x3x3 with 0 where needed -> 0`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEdgesSum([
    [
      [1,2,3],[4,0,5],[6,7,8]
    ],
    [
      [9,0,10],[0,0,0],[11,0,12]
    ],
    [
      [13,14,15],[16,0,17],[18,19,20]
    ]
  ]), 210, `3x3x3 with 1,2,..,20 where needed -> 210`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEdgesSum([
    [
      [1,1,1],[1,0,1],[1,1,1]
    ],
    [
      [1,0,1],[0,0,0],[1,0,1]
    ],
    [
      [1,0,1],[0,0,0],[1,0,1]
    ],
    [
      [1,1,1],[1,0,1],[1,1,1]
    ]
  ]), 24, `4x3x3 with 1 where needed -> 24`);
});


test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getEdgesSum([
    [
      [0,0,0],[0,1,0],[0,0,0]
    ],
    [
      [0,1,0],[1,1,1],[0,1,0]
    ],
    [
      [0,1,0],[1,1,1],[0,1,0]
    ],
    [
      [0,0,0],[0,1,0],[0,0,0]
    ]
  ]), 0, `4x3x3 with 0 where needed -> 0`);
});