import { useState } from "react";
import Advertisement from "./Advertisement";
import Image2 from "./imag2";
import Tittle from "./tittle";
import LAC1 from "./latest_Article_component1";
import TPS from "./toppostsub";
import Icon from "./icons";
function Bollywood()
{
    const [data]=useState({
        one: "Bollywood"
    })
    const [data1]=useState({
        one: "Top Post"
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
      const [line]=useState(1);
    return(
        <>
                <div className="m3">
                <div className="main1">
                <Tittle td={data}/>
                <LAC1 line={line}/>
                <LAC1 />
                <LAC1 />
                <LAC1 />
                <LAC1 />
                <LAC1 />
                <Icon />
                </div>
                <div className="main2">
                <Tittle td={data1}/>
                     <Image2 />
                     <TPS td={number2}/>
                     <TPS td={number3}/>
                     <TPS td={number4}/>
                     <Advertisement />
                </div>
                </div>
        </>
    )
}
export default Bollywood;