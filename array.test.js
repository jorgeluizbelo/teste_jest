// indices.test.js
const encontrarIndicesMaximoMinimo = require('./array');

test('Encontra corretamente o índice do maior e menor valor em um array', () => {
  expect(encontrarIndicesMaximoMinimo([10, 5, 20, 15, 30])).toEqual({
    indiceMaior: 4,
    indiceMenor: 1,
  });
});

test('Encontra corretamente o índice do maior e menor valor em um array', () => {
  expect(encontrarIndicesMaximoMinimo([100, 50, 200, 25])).toEqual({
    indiceMaior: 2,
    indiceMenor: 3,
  });
});
