import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/aboutus/About";
import Popular from "./components/popfood/Popular";
import Trending from "./components/trending/Trending";
import Subscribe from "./components/subscribe/Subscribe";
import Footer from "./components/footer/Footer"; 
import Sushis from "./pages/sushiitems/Sushis";

function App() {
  return (
    <>
      <Navbar />

      {/* <Hero />

      <About />

      <Popular />

      <Trending />
      <Subscribe />
      <Footer /> */}
      <Sushis/>
    </>
  );
}

export default App;
