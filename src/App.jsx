import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components with Correct Casing
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Demo from "./components/Demo.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import SignUp from "./components/SignUp.jsx"; // Your signup component

// Home Component Aggregating All Sections
const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            {/* Home page with all sections */}
            <Route path="/signup" element={<SignUp />} /> {/* Sign-up page */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
