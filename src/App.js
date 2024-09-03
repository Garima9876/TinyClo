import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SectionWrapper from "./components/SectionWrapper";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./components/styles/custom-bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SectionWrapper>
          <div className="mt-5 py-2">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </SectionWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
