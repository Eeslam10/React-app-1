import "../styles/Section.css";

const Section = () => {
    return ( 
        <>
            <div className="section-container">
                <div className="section-image"></div>
            </div>
            <div className="info-container">
                <div className="info">
                    <form action="">
                        <input type="text" placeholder="Enter your name"/>
                        <input type="text" placeholder="Enter your email"/>
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="type your message"></textarea>
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div className="info-circle"></div>
            </div>
        </>
     );
}
 
export default Section;