import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getSumForPrimaryDiagonalOfMultiDimensionArray', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumForPrimaryDiagonalOfMultiDimensionArray([1]), 1, `1 dimension -> 1`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumForPrimaryDiagonalOfMultiDimensionArray([[1,0],[0,1]]), 2, `2 dimensions -> 2`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumForPrimaryDiagonalOfMultiDimensionArray([
    [
      [1,0,0],[0,0,0],[0,0,0]
    ],
    [
      [0,0,0],[0,2,0],[0,0,0]
    ],
    [
      [0,0,0],[0,0,0],[0,0,1]
    ]
  ]), 4, `3 dimensions -> 4`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getSumForPrimaryDiagonalOfMultiDimensionArray([
    [
      [
        [3,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ]
    ],
    [
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ]
    ],
    [
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,2,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ]
    ],
    [
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
      ],
      [
        [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,2]
      ]
    ]
  ]), 8, `4 dimensions -> 8`);
});