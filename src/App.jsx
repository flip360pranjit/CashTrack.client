import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import { Home, Error, Authentication } from "./pages/index";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/authenticate" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
