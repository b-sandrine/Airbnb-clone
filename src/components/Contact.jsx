import { FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Contact(props) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <FaPhone />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <FaEnvelope />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}

{/* <div className="contact-card">
<img src={cat_2}/>
<h3></h3>
<div className="info-group">
    <FaPhone />
    <p></p>
</div>
<div className="info-group">
    <FaEnvelope />
    <p></p>
</div>
</div>

<div className="contact-card">
<img src={cat_3}/>
<h3></h3>
<div className="info-group">
    <FaPhone />
    <p></p>
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