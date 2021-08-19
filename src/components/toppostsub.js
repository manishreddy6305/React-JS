import "./../Styles/TPS.css"
function TPS(props){
    return(
        <>
        <div className="castle2">
            <div className="image-tp">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-92UuDp9k4iWWAqFt8dgpvIflHnp14o1JA&usqp=CAU" alt="castle"></img>
            </div>
            <div className="castle-sub1">
                <p className="Contentsub">Catch Waves with an adventure guide</p>
                <div>
                <span className="Content4">Travel</span>
                <p className="Content3"> / August 21 2017</p>
                </div>
            </div>
            <div className="Number">
                  <p className="Numbersub">{props.td.one}</p>
            </div>
        </div>
        </>
    )
}
export default TPS;