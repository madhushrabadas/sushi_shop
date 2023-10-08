import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/aboutus/About";
import Popular from "./components/popfood/Popular";
import Trending from "./components/trending/Trending";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <h1>madhu</h1>
      <Hero />
      <h1>madhu</h1>
      <About />
      <h1>madhu</h1>
      <Popular/>
      <h1>madhu</h1>
      <Trending/>
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;
