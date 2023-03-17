import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { StyledEngineProvider } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Produce from "../pages/Produce";
import News from "../pages/News";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Header />
        <div className="mainContent">
          <Routes>
            <Route element={<Home />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/produce" element={<Produce />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
