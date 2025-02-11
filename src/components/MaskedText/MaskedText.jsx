import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.split("").map(
        (
          letter,
          index // Convert string to an array
        ) => (
          <span key={index} className="mx-1">
            {letter}
          </span>
        )
      )}
    </>
  );
}

export default MaskedText;
