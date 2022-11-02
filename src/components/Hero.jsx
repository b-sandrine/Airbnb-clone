
import image from '../assets/photo-grid.png';

function Hero () {
    return (
        <section>
            <div className="image">
                <img src={image} alt="combined images" />
            </div>

            <div className="description">
                <h3>Online Experiences</h3>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero;