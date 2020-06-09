'use strict';

const multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation');

describe('happy path', () => {
  it('{} > true', () => {
    expect(multiBracketValidation('{}')).toBe(true);
  });

  it('{}(){} > true', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
  });

  it('()[[Extra Characters]] > true', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
  });

  it('(){}[[]] > true', () => {
    expect(multiBracketValidation('(){}[[]]')).toBe(true);
  });

  it('{}{Code}[Fellows](()) > true', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
  });
});

describe('expected failures', () => {
  it('[({}] > false', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
  });

  it('(]( > false', () => {
    expect(multiBracketValidation('(](')).toBe(false);
  });

  it('{(}) > false', () => {
    expect(multiBracketValidation('{(})')).toBe(false);
  });
});

describe('edge cases', () => {
  it('{ > false', () => {
    expect(multiBracketValidation('{')).toBe(false);
  });

  it(') > false', () => {
    expect(multiBracketValidation(')')).toBe(false);
  });

  it('[} > false', () => {
    expect(multiBracketValidation('[}')).toBe(false);
  });

});