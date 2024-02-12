// somaMultiplos.test.js
const somaMultiplosDe5e7 = require('./lista');

test('Soma corretamente todos os múltiplos de 5 ou 7 abaixo de 1000', () => {
  expect(somaMultiplosDe5e7()).toBe(210385);
});
