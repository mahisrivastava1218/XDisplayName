import {BrowserRouter,Routes,Route} from "react-router-dom";
import Display from "./Display/Display.jsx";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Display/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
