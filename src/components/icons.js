import {FaAngleDoubleDown} from "react-icons/fa"
import { IconContext } from "react-icons";
import "./../Styles/icon.css"
function Icon(){
    return(
        <>
         <p className="Load"><IconContext.Provider value={{ color: "orangered", className: "global-class-name" }}>
         <FaAngleDoubleDown/> 
         </IconContext.Provider>Load More</p>
        </>
    )
}
export default Icon;