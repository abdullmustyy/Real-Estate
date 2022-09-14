import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Tour from "./components/Tour";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function App() {
  return (
    <section className="font-poppins text-re-brown bg-re-white">
      <Navbar />
      <Hero />
      <Features />
      <Contact />
      <Tour />
      <Partners />
      <Footer />
    </section>
  );
}
