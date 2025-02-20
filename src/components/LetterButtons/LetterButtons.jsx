const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
function LetterButtons({ text, guessedLetters, onLetterClick }) {
  const originalLetters = new Set(text.toUpperCase().split(""));
  const guessedlettersSet = new Set(guessedLetters);
  
  const buttonStyle = function (letter) {
    if (guessedlettersSet.has(letter)) {
      return `${originalLetters.has(letter) ? "bg-green-500" : "bg-red-500"}`;
    } else {
      return "bg-blue-500";
    }
  };

  function handleLetterClick(event) {
    const characterOfLetter = event.target.value;
    onLetterClick?.(characterOfLetter);
  }
  const buttons = ALPHABETS.map((letter) => {
    return (
      <button
        key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={guessedlettersSet.has(letter)}
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
      >
        {letter}
      </button>
    );
  });
  return <>{buttons}</>;
}

export default LetterButtons;
