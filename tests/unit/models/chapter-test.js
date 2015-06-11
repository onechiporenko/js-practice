import { moduleForModel, test } from 'ember-qunit';

moduleForModel('chapter', 'Unit | Model | chapter', {
  // Specify the other units that are required for this test.
  needs: ['model:task']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
