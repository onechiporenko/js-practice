import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.getCoordinates', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates(''), [], `('') -> []`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('abc'), [], `('abc') -> []`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('abc{}'), [], `('abc{}') -> []`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('abc{1,2}'), [{x: 1, y: 2}], `('abc{1,2}') -> [{x :1, y: 2}]`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('abc{1,2}{33,46}'), [{x: 1, y: 2}, {x: 33, y: 46}], `('abc{1,2}{33,46}') -> [{x :1, y: 2}, {x: 33, y: 46}]`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('{111,123}abc{1,2}{33,46}'), [{x: 111, y: 123}, {x: 1, y: 2}, {x: 33, y: 46}], `('{111,123}abc{1,2}{33,46}') -> [{x: 111, y: 123}, {x :1, y: 2}, {x: 33, y: 46}]`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('{111, 123}abc{2}{33,46}'), [{x: 111, y: 123}, {x: 33, y: 46}], `('{111, 123}abc{1}{33,46}') -> [{x: 111, y: 123}, {x: 33, y: 46}]`);
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('{111, b}abc{dddd}{33,46}'), [{x: 33, y: 46}], `('{111, b}abc{dddd}{33,46}') -> [{x: 33, y: 46}]`);
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('{111, b}abc{-33,46}'), [{x: -33, y: 46}], `('{111, b}abc{-33,46}') -> [{x: -33, y: 46}]`);
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('{-33, -46}'), [{x: -33, y: -46}], `('{-33, -46}') -> [{x: -33, y: -46}]`);
});

test('test11', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCoordinates('abc{-33 , -46}bca'), [{x: -33, y: -46}], `('abc{-33 , -46}bca') -> [{x: -33, y: -46}]`);
});