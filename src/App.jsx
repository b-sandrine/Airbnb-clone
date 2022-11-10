import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import cat_1 from './assets/pexels-kelvin-valerio-617278.jpg';
import cat_2 from './assets/istockphoto-1217828258-612x612.jpg';
import cat_3 from './assets/pexels-peng-louis-1643457.jpg'
import cat_4 from './assets/pexels-pixabay-45201.jpg';
import data from './data'
function App() {
  const cardData = data.map((card) => {
    return <Card key={card.id} item={card}/>
  })

  return(
    <div className="container">
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

export default App;