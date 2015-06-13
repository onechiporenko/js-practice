import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/objects', 'solutions.objects.getCustomProperties', {});

test('test1', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomProperties({
    a: 1, b: 2, c: 3, d: 4
  }, ['a', 'b', 'e']), {
    a: 1, b: 2
  });
});

test('test2', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomProperties({
    a: 1, b: 2, c: 3, d: 4
  }, []), {});
});

test('test3', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomProperties({}, ['a', 'b', 'e']), {});
});

test('test4', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomProperties({
    a: 1, b: 2, c: 3, d: 4
  }, ['a', 'b']), {
    a: 1, b: 2
  });
});

test('test5', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomProperties({
    a: 1, b: 2, c: 3, d: 4
  }, ['e', 'f']), {});
});

test('test6', function(assert) {
  var controller = this.subject();
  assert.deepEqual(controller.getCustomProperties({
    a: 1, b: 2, c: 3, d: 4, hasOwnProperty: 5
  }, ['e', 'f', 'hasOwnProperty']), {
    hasOwnProperty: 5
  });
});