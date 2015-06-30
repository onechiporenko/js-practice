import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.useContext', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.equal(controller.useContext({x: 1}, function() {
    return this.x;
  }), '1', `Valid object is used`);
});