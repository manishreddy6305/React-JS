import {Link} from "react-router-dom";
import "../Styles/Header.css"
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
function Header(){
    function navbaropen(){
        let a=document.getElementById("navbar");
        a.classList.toggle("navbaru");   
    }
    return(
        <>
        <div id="header">
                 <div id="logo">
                     <div id="sublogo">
                     <p id="the">The</p>
                     <h1 id="siren">Siren</h1>
                     </div>
                 </div>
                 <div className="Favbar" onClick={navbaropen}>
                <p>
                 <IconContext.Provider value={{ color: "Silver", className: "Fb" }}>
                 <FaBars /> 
                 </IconContext.Provider>
                 </p>
                 </div>
                 <div id="navbar">
                 <Link to="/" className="links">Home</Link>
                 <Link to="/Bollywood" className="links">Bollywood</Link>
                 <Link to="" className="links">Technology</Link>
                 <Link to="" className="links">Hollywood</Link>
                 <Link to="" className="links">Fitness</Link>
                 <Link to="" className="links">Food</Link>
                 </div>
        </div>
        
        </>
    )
}
export default Header;