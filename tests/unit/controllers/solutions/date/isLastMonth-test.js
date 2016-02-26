import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/date', 'solutions.date.isLastMonth', {});

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].forEach(function (day) {

  test('test' + day + ' ago', function(assert) {
    assert.expect(1);
    var controller = this.subject();
    var date = new Date();
    var ago = new Date(date.setDate(date.getDate() - day));
    assert.equal(controller.isLastMonth(ago), true, `(${day} day(s) ago) -> true`);
  });

  test('test' + day + ' after', function(assert) {
    assert.expect(1);
    var controller = this.subject();
    var date = new Date();
    var ago = new Date(date.setDate(date.getDate() + day));
    assert.equal(controller.isLastMonth(ago), false, `(${day} day(s) after) -> false`);
  });

});

test('test 50 ago', function(assert) {
  assert.expect(1);
  var controller = this.subject();
  var date = new Date();
  var ago = new Date(date.setDate(date.getDate() - 50));
  assert.equal(controller.isLastMonth(ago), false, `(50 day(s) ago) -> false`);
});