import { division } from './division';

describe('division', () => {
  test('positive', () => {
    expect(division(5, 5)).toBe(1);
  });

  test('negative', () => {
    expect(division(-5, 5)).toBe(-1);
  });
});
