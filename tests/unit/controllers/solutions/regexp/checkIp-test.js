import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/regexp', 'solutions.regexp.checkIp', {});

var all = ['0', '99', '100', '199', '255', '249', '256', '300', '260', ' a'];
var invalid = ['256', '300', '260', ' a'];

for (let i = 0; i < all.length; i++) {
  for (let j = 0; j < all.length; j++) {
    test('test' + (i*all.length + j + 1), function (assert) {
      var controller = this.subject();
      var ip = '162.196.' + all[i] + '.' + all[j];
      var valid = !(invalid.contains(all[i]) || invalid.contains(all[j]));
      assert.equal(controller.checkIp(ip), valid, `('${ip}') -> ${valid}`);
    });
  }
}
