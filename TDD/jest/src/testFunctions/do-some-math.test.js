import { sum, substract, multiply, divide } from '../myFunctions/do-some-math';

describe('Math Functions Test', () => {
  it('두 개의 숫자를 더합니다.', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it('두 개의 숫자를 뺍니다.', () => {
    expect(substract(5, 3)).toBe(2);
    expect(substract()).toBe(0);
    expect(substract(2, 4)).toBe(-2);
  });

  it('두 개의 숫자를 곱합니다.', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply()).toBe(0);
    expect(multiply(0.5, 2)).toBe(1);
    expect(multiply(-10, 5)).toBe(-50);
  });

  it('두 개의 숫자를 나눕니다.', () => {
    expect(divide(3, 4)).toBe(0.75);
    expect(() => divide()).toThrowError('0으로 나눌 수 없습니다!');
    expect(divide(-2, 0.1)).toBe(-20);
  });
});
