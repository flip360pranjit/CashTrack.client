import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import { Home, Error, Authentication } from "./pages/index";
import Dashboard from "./pages/Dashboard/Dashboard";
import Overview from "./components/Dashboard/Overview/Overview";
import Transactions from "./components/Dashboard/Transactions/Transactions";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/authenticate" element={<Authentication />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="" element={<Overview />} />
            <Route path="mytransactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
