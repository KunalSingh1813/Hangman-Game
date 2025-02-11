import { Link, useLocation } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";

function PlayGame() {
  //const [searchparamss] = useSearchParams();
  //console.log(searchparamss.get("text"))
  // const {text} = useParams();
  const { state } = useLocation();
  console.log("Location state:", location.state);
  return (
    <>
      <h1>Play Game {state.wordSelected}</h1>

      <MaskedText text={state.wordSelected} guessedLetters={["H", "E"]} />

      <Link to={"/start"} className="text-blue-400">
        Start Game Link
      </Link>
    </>
  );
}

export default PlayGame;
