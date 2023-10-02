import "../styles/Header.css";

const Header = () => {
    return ( 
        <>
            <div className="background">
                <div className="train">
                    <div className="train-details">
                    <p>Train Station</p>
                    <p>Safest way to Travel</p>
                    <button className="btn">Click to book</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Header;