import rgbToHex from '../rgbToHex.js';

test('mvp test', () => {
  expect(rgbToHex(0, 0, 0)).toEqual('000000');
  expect(rgbToHex(0, 0, -20)).toEqual('000000');
  expect(rgbToHex(300,255,255)).toEqual('FFFFFF');
  expect(rgbToHex(173,255,47)).toEqual('ADFF2F');
});
