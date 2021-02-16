import {
  combineWords,
  splitWords,
  upperCaseWord,
  upperCaseWords,
} from '../helpers';

describe('Navigation helpers', () => {
  it('combineWords', () => {
    const words = 'the quick brown fox';

    const result = combineWords(words);

    expect(result).toEqual('the-quick-brown-fox');
  });

  it('splitWords', () => {
    const words = 'the quick brown fox';

    const result = splitWords(words);

    expect(result).toHaveLength(4);
  });

  it('upperCaseWord', () => {
    const word = 'test';

    const result = upperCaseWord(word);

    expect(result).toEqual('Test');
  });

  it('upperCaseWords', () => {
    const words = 'the quick brown fox';

    const result = upperCaseWords(words);

    expect(result).toEqual('The Quick Brown Fox');
  });
});
