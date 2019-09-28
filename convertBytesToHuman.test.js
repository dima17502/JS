/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */
const convertBytesToHuman = require('./convertBytesToHuman.js');

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman([])).toBe(false);
  expect(convertBytesToHuman({})).toBe(false);
  expect(convertBytesToHuman(()=>{return 5;})).toBe(false);
  expect(convertBytesToHuman(class c{})).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(false)).toBe(false);
  expect(convertBytesToHuman(undefined)).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
  expect(convertBytesToHuman(Symbol())).toBe(false);
  expect(convertBytesToHuman(-1)).toBe(false);

});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123)).toBe(123);
  expect(convertBytesToHuman(1010)).toBe(10);
  expect(convertBytesToHuman(1000000)).toBe(64);
  expect(convertBytesToHuman(11111100011)).toBe(2019);
});

