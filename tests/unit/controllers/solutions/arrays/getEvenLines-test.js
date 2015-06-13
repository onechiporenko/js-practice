import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/arrays', 'solutions.arrays.getEvenLines', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenLines([[]]), []);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenLines([[1,2],[3,4]]), [3,4]);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getEvenLines([[1,2,3],[4,5,6],[7,8,9],[10,11,12]]), [[4,5,6],[10,11,12]]);
});