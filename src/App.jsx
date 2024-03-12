import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Worldcup from "./pages/Worldcup";
import Loading from "./conponents/Loading";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/worldcup" element={<Worldcup />} />
        <Route path="/loadings" element={<Loading />} />
        <Route path="/results/:flavorId" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
