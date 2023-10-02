import "../styles/Navbar.css";
import { FiMenu } from "react-icons/fi";
import { DiReact } from "react-icons/di";

const Navbar = () => {
    return ( 
        <>
        <div className="icons">
            <DiReact size={100} color="grey"/>
            <div className="cursor">
            <FiMenu size={30} color="grey"/>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;