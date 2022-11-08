import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './App.css';

import Home from "./pages/Home"
import Oquee from "./pages/oquee"
import Sintomasetransmicao from "./pages/sintomasetransmicao"
import Diagnostico from "./pages/diagnostico"
import Tratamento from "./pages/tratamento"
import Terapianutricional from "./pages/terapianutricional"
import Fisiorespiratoria from "./pages/fisiorespiratoria"
import Prevencao from "./pages/prevencao"
import Curiosidades from "./pages/curiosidades"
import Tvtb from "./pages/tvtb"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oquee" element={<Oquee />} />
          <Route path="/sintomasetransmicao" element={<Sintomasetransmicao />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/tratamento" element={<Tratamento />} />
          <Route path="/terapianutricional" element={<Terapianutricional />} />
          <Route path="/fisiorespiratoria" element={<Fisiorespiratoria />} />
          <Route path="/prevencao" element={<Prevencao />} />
          <Route path="/curiosidades" element={<Curiosidades />} />
          <Route path="/tvtb" element={<Tvtb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
