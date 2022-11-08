import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import cat_1 from './assets/pexels-kelvin-valerio-617278.jpg';
import cat_2 from './assets/istockphoto-1217828258-612x612.jpg';
import cat_3 from './assets/pexels-peng-louis-1643457.jpg'
import cat_4 from './assets/pexels-pixabay-45201.jpg'
function App() {
  return(
    <div className="container">
      <Navbar />
      <Hero />
      {/* <Card /> */}
      <Contact img={cat_1} name="Mr. Whiskerson" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
      <Contact img={cat_2} name="Fluffykins" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
      <Contact img={cat_3} name="Felix" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
      <Contact img={cat_4} name="Pumpkin" phone="(212) 555-1234" email="mr.whiskaz@catnap.meow"/>
    </div>
  )
}

export default App;