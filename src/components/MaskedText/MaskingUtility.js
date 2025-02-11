/**
 *
 * @param {The word which is given as input and is expected to be guessed } originalWord
 * @param {letters which are guessed by the user already} guessedLetters
 * Eg: originalWord: HUMBLE
 * guessedLetters:{'H','M','E'}
 *
 *
 * return a string like H_M_E
 */

export function getMaskedString(originalWord, guessedLetters) {
  guessedLetters = guessedLetters.map((letter) => letter.toUpperCase()); //['h','M','e'] -> ['H','M','E']

  const guessedLetterSet = new Set(guessedLetters);

  const result = originalWord.toUpperCase().split('')  //Returns an array with all characters in capital letters
  .map(char => {
    if(guessedLetterSet.has(char)){
        return char;
    }else {
        return "_";
    }
  }); 

  return result.join('');
}
