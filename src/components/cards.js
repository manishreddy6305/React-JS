import "./../Styles/cards.css"
function Cards(){
    return(
        <>
        <div className="cards">
            <div className="Towerd">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV17fvUrXke40p1214zhL1v1T9ccqJHTPAyQ&usqp=CAU" alt="place" className="Tower"></img>  
         </div>  
          <div className="card-content">
              <h2 className="head">Joshua Tree <br></br> Overnight Adventure</h2>
              <p className="cs">Gujarat is vastly underrated and its a mystery to us why the region isnt more well- known as a tourist destination.It has a plethora of temples and palaces</p>
              <div>
                <span className="Content4">Travel</span>
                <p className="Content3"> / August 21 2017</p>
                </div>
          </div>
        </div>
        </>
    )
}
export default Cards;