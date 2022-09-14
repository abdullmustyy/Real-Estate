import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Tour from "./components/Tour";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const darkModeStyles = {
    backgroundColor: darkMode ? "#1b1b1b" : "",
    color: darkMode ? "white" : "",
  };

  return (
    <section
      className="font-poppins text-re-brown bg-re-white"
      style={darkModeStyles}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Features />
      <Contact />
      <Tour />
      <Partners />
      <Footer darkMode={darkMode} />
    </section>
  );
}
