import Cards from "./cards";
import { useState } from "react"
import Tittle from "./tittle";
import {FaArrowRight} from "react-icons/fa"
import LAC1 from "./latest_Article_component1";
import "./../Styles/latest.css"
import { IconContext } from "react-icons";
import TPS from "./toppostsub";
import LSC from "./LSC";
import Icon from "./icons";
import Advertisement from "./Advertisement";
import Image2 from "./imag2";
function Latest(){
    const [title_data]=useState({
      one: "The Latest"
    })
    const [title_data1]=useState({
      one: "Latest Articles"
    })
    const [title_data2]=useState({
      one: "Top Posts"
    })
    const [title_data3]=useState({
      one: "Latest Stories"
    })
    const [number2]=useState({
      one: 2
    })
    const [number3]=useState({
      one: 3
    })
    const [number4]=useState({
      one: 4
    })
    const [verify]=useState(1)
    const [c1]=useState({
      one: "Tech" ,
      two: " / Today AT 11:54"
    })
    const [c2]=useState({
      one: "Style" ,
      two: " / AUGUST 21 2017"
    })
    const [c3]=useState({
      one: "Style" ,
      two: " / AUGUST 21 2017"
    })
    return(
          <>
            <div className="latest">
                <Tittle td={title_data}/>
                <div className="cards-main">
                <Cards />
                <Cards />
                <Cards />
                </div>
            </div>
            <div className="latest_Articles">
                <Tittle td={title_data1}/>
                <div className="m3">
                <div className="main1">
                <LAC1 />
                <LAC1 />
                <LAC1 />
                <LAC1 />
                <Icon />
                <div className="big-image"> 
                <div>
                <h2 className="ti">Tittle of vertical gallery</h2>
                <div className="ti2">
                           <div>
                          <span className="Content4" style={{color:"white"}}>Travel</span>
                          <p className="Content3" style={{color:"white"}}> / August 21 2017</p>
                          </div>
                      </div>
                    </div>
                </div>
                </div>
                <div className="main2">
                   <Advertisement />
                   <Tittle td={title_data2} />
                     <Image2 />
                     <TPS td={number2}/>
                     <TPS td={number3}/>
                     <TPS td={number4}/>
                </div>
                </div>
            </div>
            <div className="Latest-Stories">
             <Tittle td={title_data3}/>
             <div className="latest_stories_content">
             <LSC td={c1}/>
             <LSC td={c2}/>
             <LSC verify={verify} td={c3}/>
             </div>
            </div>
            <p className="Load2">VIEW MORE <IconContext.Provider value={{ color: "orangered", className: "global-class-name2" }}>
            <FaArrowRight />
           </IconContext.Provider></p>
          </>
    )
}
export default Latest;