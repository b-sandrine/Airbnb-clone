import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from './components/Card';
import data from './data'
function App() {
  const cardData = data.map((card) => {
    return <Card key={card.id} item={card}/>
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