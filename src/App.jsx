import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/Card';
import data from './data'
function App() {
  const cardData = data.map((card) => {
    return <Card img={card.coverImg} rating={card.stats.rating}  country={card.location} 
    title={card.title} price={card.price} reviewCount={card.stats.reviewCount}/>
  })

  return(
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cardData">
        {cardData}
      </section>
      
    </div>
  )
}

export default App;