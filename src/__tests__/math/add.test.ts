import add from '@src/math/add';

describe('add function', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(12);
  });
});
