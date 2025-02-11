import { Route, Routes } from "react-router-dom";
import "./App.css";
import PlayGame from "./pages/PlayGame";
import StartGame from "./pages/startGame";
function App() {
  return (
    <>
      <div>
        {/* key = value is accesible through props object */}
        <Routes>
          <Route path="/start" element={<StartGame />} />
          <Route path="/play" element={<PlayGame />} />
        </Routes>
        {/* <TextInputFormContainer/> */}
      </div>
    </>
  );
}

export default App;
