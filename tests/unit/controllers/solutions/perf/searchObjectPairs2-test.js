import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:solutions/perf', 'solutions.perf.searchObjectPairs2', {

  beforeEach: function() {
    this.c1 = generateArray(10000);
    this.c2 = shuffle(copyArrayOfObjects(this.c1));
  }

});

function someRandomString() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

function generateArray(count) {
  var objs = [];
  for (var i = 0; i < count; i++) {
    objs.push({
      keyField: [
        {f: someRandomString()},
        {f: someRandomString()},
        {f: someRandomString()}
      ]
    });
  }
  return objs;
}

function copyArrayOfObjects(array) {
  return JSON.parse(JSON.stringify(array));
}

function shuffle(o) {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

test('test1', function (assert) {

  this.c1 = [{
      keyField: [
        {f: 1}, {f: 2}
      ]
    },
    {
      keyField: [
        {f: 3}, {f: 4}
      ]
    }];
  this.c2 = [{
    keyField: [
      {f: 3}, {f: 4}
    ]
  },
    {
      keyField: [
        {f: 1}, {f: 2}
      ]
    }];

  var controller = this.subject();
  var ret1 = controller.searchObjectPairs(this.c1, this.c2);
  var ret2 = controller.searchObjectPairs2(this.c1, this.c2);

  assert.deepEqual(ret1, ret2, `Проверка корректности работы с небольшими массивами`);

});

test('test2', function(assert) {
  var controller = this.subject();

  var t1 = new Date().getTime();
  var ret1 = controller.searchObjectPairs(this.c1, this.c2);
  var t2 = new Date().getTime();
  var diff1 = t2 - t1;

  var t3 = new Date().getTime();
  var ret2 = controller.searchObjectPairs2(this.c1, this.c2);
  var t4 = new Date().getTime();
  var diff2 = t4 - t3;

  var r1 = ret1.map(function(pair) {
    return pair.el1.keyField.mapBy('f').join(',') + '|' + pair.el2.keyField.mapBy('f').join(',');
  }).join('.');

  var r2 = ret2.map(function(pair) {
    return pair.el1.keyField.mapBy('f').join(',') + '|' + pair.el2.keyField.mapBy('f').join(',');
  }).join('.');

  assert.equal(r1, r2, `Обе функции генерируют одинаковый набор пар`);

  assert.ok(diff1 / diff2 > 10, `1. ${diff1} 2. ${diff2}. Вторая функция быстрее первой как минимум в 10 раз`);
});