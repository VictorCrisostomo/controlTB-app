import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import "./App.css"

// Paginas
import Home from "./pages/Home"
// import Oquee from "./pages/oquee"
// import Sintomasetransmicao from "./pages/sintomasetransmicao"
// import Diagnostico from "./pages/diagnostico"
// import Tratamento from "./pages/tratamento"
// import Terapianutricional from "./pages/terapianutricional"
// import Fisiorespiratoria from "./pages/fisiorespiratoria"
// import Prevencao from "./pages/prevencao"
// import Curiosidades from "./pages/curiosidades"
// import Tvtb from "./pages/tvtb"


// Components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Loading from "./components/layout/Loading"

const LazyOquee = React.lazy(() => import("./pages/oquee"));
const LazySintomaseTransmicao = React.lazy(() => import("./pages/sintomasetransmicao"));
const LazyDiagnostico = React.lazy(() => import("./pages/diagnostico"));
const LazyTratamento = React.lazy(() => import("./pages/tratamento"));
const LazyTerapiaNutricional = React.lazy(() => import("./pages/terapianutricional"));
const LazyFisioRespiratoria = React.lazy(() => import("./pages/fisiorespiratoria"));
const LazyPrevencao = React.lazy(() => import("./pages/prevencao"));
const LazyCuriosidades = React.lazy(() => import("./pages/curiosidades"));
const LazyTvTb = React.lazy(() => import("./pages/tvtb"));

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
             path="/oquee" 
             element={
              <React.Suspense fallback={<Loading />}>
                <LazyOquee />
              </React.Suspense>
              }/>
            <Route 
              path="/sintomasetransmicao"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazySintomaseTransmicao />
                </React.Suspense>
              }/>
            <Route
              path="/diagnostico"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyDiagnostico />
                </React.Suspense>
              }/>
            <Route
               path="/tratamento"
               element={
                <React.Suspense fallback={<Loading />}>
                  <LazyTratamento />
                </React.Suspense>
               }/>
            <Route
            path="/terapianutricional"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyTerapiaNutricional />
              </React.Suspense>
            }/>
            <Route
            path="/fisiorespiratoria"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyFisioRespiratoria />
              </React.Suspense>
            }/>
            <Route
              path="/prevencao"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyPrevencao />
                </React.Suspense>
              }/>
            <Route
              path="/curiosidades"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyCuriosidades />
                </React.Suspense>
              }/>
            <Route
              path="/tvtb"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyTvTb />
                </React.Suspense>
            }/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
