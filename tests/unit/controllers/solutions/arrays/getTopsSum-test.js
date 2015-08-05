import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getTopsSum', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTopsSum([
    [
      [1,1],[1,1]
    ],
    [
      [1,1],[1,1]
    ]
  ]), 8, `2x2x2 -> 8`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTopsSum([
    [
      [1,0,1],[0,0,0],[1,0,1]
    ],
    [
      [0,0,0],[0,0,0],[0,0,0]
    ],
    [
      [1,0,1],[0,0,0],[1,0,1]
    ]
  ]), 8, `3x3x3 -> 8`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTopsSum([
    [
      [0,1,0],[1,1,1],[0,1,0]
    ],
    [
      [1,1,1],[1,1,1],[1,1,1]
    ],
    [
      [0,1,0],[1,1,1],[0,1,0]
    ]
  ]), 0, `3x3x3 -> 0`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTopsSum([
    [
      [1,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1]
    ],
    [
      [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]
    ],
    [
      [1,0,0,0,1],[0,0,0,0,0],[0,0,0,0,0],[1,0,0,0,1]
    ]
  ]), 8, `3x4x5 -> 8`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getTopsSum([
    [
      [0,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0]
    ],
    [
      [1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]
    ],
    [
      [0,1,1,1,0],[1,1,1,1,1],[1,1,1,1,1],[0,1,1,1,0]
    ]
  ]), 0, `3x4x5 -> 0`);
});