import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
  console.log("text:",text);
  console.log("guessedLetters:"+guessedLetters);
  const maskedString = getMaskedString(text, guessedLetters);
  return (
    <>
      {maskedString.map((letter,index) => {
        return(
          <span key={index} className="mx-1">
            {letter}
          </span>
        )
      })}
    </>
  );
}

export default MaskedText;
