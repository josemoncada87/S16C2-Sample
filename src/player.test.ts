import {
  expect, test,
} from 'vitest';
import Player from './player';

// Edit an assertion and save to see HMR in action

test('testing right', () => {
  const player = new Player(200, 200);
  player.move(0);
  expect(player.getX()).toBe(201);
});

test('testing left', () => {
  const player = new Player(200, 200);
  player.move(1);
  expect(player.getX()).toBe(199);
});

/*
test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  };

  const output = JSON.stringify(input);

  expect(output).eq('{"foo":"hello","bar":"world"}');
  assert.deepEqual(JSON.parse(output), input, 'matches original');
});
*/
