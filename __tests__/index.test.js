import func from '../index.js';

test('default', () => {
  expect(func(3)(3, 4)).toEqual(21);
});
