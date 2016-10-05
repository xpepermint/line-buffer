const test = require('ava');
const {LineBuffer} = require('../src');

test('feed (string)', async t => {
  let b = new LineBuffer();

  t.deepEqual(b.feed('a\nb'), ['a']);
  t.deepEqual(b.feed('\r\nc\n'), ['b', 'c']);
  t.deepEqual(b.feed('d\r'), []);
  t.deepEqual(b.feed('\n'), ['d']);
});
