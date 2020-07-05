'use strict';

const repeatedWord = require('../repeatedWord/repeated-word');

describe('repeated-word', () => {

  it('returns null if given a string with no repeating words', () => {
    expect(repeatedWord('hello tean, im raghad')).toBe(null);
  });

  it('returns null if given a string with no spaces', () => {
    expect(repeatedWord('helloteam,imraghad')).toBe(null);
  });

  it('returns the first repeated word', () => {
    let str1 = 'Once upon a time, there was a brave princess who...';
    let str2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let str3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

    expect(repeatedWord(str1)).toBe('a');
    expect(repeatedWord(str2)).toBe('it');
    expect(repeatedWord(str3)).toBe('summer');
  });

  it('ignores punctuation and cases in strings passed in', () => {
    let str = '!!hello?? team HELLO how are you?';
    expect(repeatedWord(str)).toBe('hello');
  });

});