// mdc.test.js
const calcularMDC = require('./mdc');

test('Calcula corretamente o MDC entre dois números', () => {
  expect(calcularMDC(36, 24)).toBe(12);
});

test('Calcula corretamente o MDC entre dois números', () => {
  expect(calcularMDC(81, 18)).toBe(9);
});
