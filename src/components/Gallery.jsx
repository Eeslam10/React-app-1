import "../styles/Gallery.css";
import imageFile from "./../assets/images/04.jpg";

const Gallery = () => {
    const images = [
		{id: 1,src: imageFile},
		{id: 2,src: imageFile},
		{id: 3,src: imageFile},
		{id: 4,src: imageFile},
		{id: 5,src: imageFile},
		{id: 6,src: imageFile},
		{id: 7,src: imageFile},
		{id: 8,src: imageFile},
		{id: 9,src: imageFile},
	];
    return ( 
        <>
            <div className="train-quote">
                <p>If a train doesn't stop at your station, then it's not your train.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla expedita quae suscipit eveniet cum illo quaerat dignissimos accusamus vel.</p>
            </div>
            <div className="gallery">
			{images.map((image) => {
				return (
					<div className="image-container">
						<img className="image" src={image.src} alt="" key={image.id} />
					</div>
				);
			})}
		</div>
        </>
     );
}
 
export default Gallery;