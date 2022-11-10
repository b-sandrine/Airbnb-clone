import star from '../assets/star.png'

function Card(props) {
    return (
        <section>
            <div className="card">
                {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
                <img src={props.img} className="card--image" />
                <div className="card--stats">
                    <img src={star} className="card--star" />
                    <span>{props.rating}</span>
                    <span className='gray'>({props.reviewCount}) • </span>
                    <span className='gray'> {props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className='bold'>From ${props.price}</span> / person</p>
            </div>
        </section>
    )
}

export default Card;