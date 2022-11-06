import cat_1 from '../assets/pexels-kelvin-valerio-617278.jpg';
// import cat_2 from '../assets/istockphoto-1217828258-612x612.jpg';
// import cat_3 from '../assets/pexels-peng-louis-1643457.jpg'
// import cat_4 from '../assets/pexels-pixabay-45201.jpg'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="contacts">
        
            <div className="contact-card">
                <img src={cat_1}/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <FaPhone />
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <FaEnvelope />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
        </div>
    )
}

{/* <div className="contact-card">
<img src={cat_2}/>
<h3>Fluffykins</h3>
<div className="info-group">
    <FaPhone />
    <p>(212) 555-1234</p>
</div>
<div className="info-group">
    <FaEnvelope />
    <p>mr.whiskaz@catnap.meow</p>
</div>
</div>

<div className="contact-card">
<img src={cat_3}/>
<h3>Felix</h3>
<div className="info-group">
    <FaPhone />
    <p>(212) 555-1234</p>
</div>
<div className="info-group">
    <FaEnvelope />
    <p>mr.whiskaz@catnap.meow</p>
</div>
</div>

<div className="contact-card">
<img src={cat_4}/>
<h3>Pumpkin</h3>
<div className="info-group">
    <FaPhone />
    <p>(212) 555-1234</p>
</div>
<div className="info-group">
    <FaEnvelope />
    <p>mr.whiskaz@catnap.meow</p>
</div>
</div> */}