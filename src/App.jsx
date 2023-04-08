import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import { Home, Error, Authentication } from "./pages/index";
import UserProfile from "./components/UserProfile/UserProfile";
import SavingGoals from "./components/SavingGoals/SavingGoals";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/authenticate" element={<Authentication />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/saving" element={<SavingGoals />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
