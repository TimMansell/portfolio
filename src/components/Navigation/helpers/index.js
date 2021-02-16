export const combineWords = (words) => words.replace(' ', '-');

export const splitWords = (words) => words.split(' ');

export const upperCaseWord = ([initial, ...rest]) =>
  [initial.toUpperCase(), ...rest].join('');

export const upperCaseWords = (name) => {
  const words = splitWords(name);

  return words.map((word) => upperCaseWord(word)).join(' ');
};
