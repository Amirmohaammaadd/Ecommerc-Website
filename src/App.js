import "./App.css";
import Banner from "./components/Banner/banner";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import Products from "./components/Products/products";
import Subscribe from "./components/Subscribe/subscribe";
import Testimonials from "./components/Testimonials/testimonials";
import TopProducts from "./components/TopProducts/topProducts";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SecondHero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe /> 
      <Testimonials />                                                                                                                                                                          
    </div>
  );
}

export default App;
