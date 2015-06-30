import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.formatDate', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(1388538605000, 'YYYY/mm/dd hh:LL:ss'), '2015/01/01 03:10:05', `(1388538605000, 'YYYY/mm/dd hh:LL:ss') -> '2015/01/01 03:10:05'`);
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(1388538605000, 'YYYY/MM/DD HH:LL:SS'), '2015/1/1 3:10:5', `(1388538605000, 'YYYY/MM/DD HH:LL:SS') -> '2015/1/1 3:10:5'`);
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(1388538605000, 'YY YYYY YY'), '15 2015 15', `(1388538605000, 'YY YYYY YY') -> '15 2015 15'`);
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(1388538605000, 'YYmmYYYYmmYY'), '150120150115', `(1388538605000, 'YYmmYYYYmmYY') -> '150120150115'`);
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(1388538605000, 'YYmmMMmmYY'), '150110115', `(1388538605000, 'YYmmMMmmYY') -> '150110115'`);
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(0, 'YYYY/mm/dd hh:LL:ss'), '0000/00/00 00:00:00', `(0, 'YYYY/mm/dd hh:LL:ss') -> '0000/00/00 00:00:00'`);
});

test('test7', function(assert) {
  var controller = this.subject();
  assert.equal(controller.formatDate(0, 'YYYY/MM/DD HH:LL:SS'), '0000/0/0 0:0:0', `(0, 'YYYY/MM/DD HH:LL:SS') -> '0000/0/0 0:0:0'`);
});