import About from "./components/About";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
}
