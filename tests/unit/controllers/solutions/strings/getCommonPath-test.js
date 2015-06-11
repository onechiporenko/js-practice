import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/strings', 'solutions.strings.getCommonPath', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/path4.txt', '/path1/path2/path3.txt'), '/path1/path2/');

});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/path4.txt', ''), '');
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('', '/path1/path2/path4.txt'), '');
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('', ''), '');
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/path4.txt', '/path1/path2/path4.txt'), '/path1/path2/path4.txt');
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/path4.txt', '/path1/path2/path4.txt/path5.txt'), '/path1/path2/');
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/path4.txt/', '/path1/path2/path4.txt/path5.txt'), '/path1/path2/path4.txt');
});

test('test8', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/path4', '/path1/path2/path4.txt'), '/path1/path2/');
});

test('test9', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/.htaccess', '/path1/path2/'), '/path1/path2/');
});

test('test10', function(assert) {
  var controller = this.subject();
  assert.equal(controller.getCommonPath('/path1/path2/.htaccess', '/path1/path2'), '/path1/');
});