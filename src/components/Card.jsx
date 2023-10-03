import "../styles/Card.css";
import cardFile from "./../assets/images/028.png";


const Card = () => {
    const images = [
		{id: 1,src: cardFile},
		{id: 2,src: cardFile},
		{id: 3,src: cardFile},
		{id: 4,src: cardFile},
		{id: 5,src: cardFile},
		{id: 6,src: cardFile},
		{id: 7,src: cardFile},
		{id: 8,src: cardFile}
	];
    return ( 
        <>
        <div className="venues">
           <p>Our Venues for Booking</p>
        </div>
            <div className="card-wrapper">
			{images.map((image) => {
				return (
					<div className="card-container">
						<img className="card" src={image.src} alt="" key={image.id} />
                        <h3>Card Title</h3>
                        <p>This is the description</p>
                        <button>View more</button>
					</div>
				);
			})}
		</div>
        </>
     );
}

export default Card;