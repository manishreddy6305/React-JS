import "./../Styles/LAC1.css"
let bl;
function LAC1(props)
{   if(props.line===1)
    {
        bl="cl";
    }
    else
    {
        bl="castle"
    }
    return(
        <>
        <div className={bl}>
            <div className="image">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp-92UuDp9k4iWWAqFt8dgpvIflHnp14o1JA&usqp=CAU" alt="castle" className="i"></img>
            </div>
            <div className="castle-sub">
                <p className="Content1">Catch Waves with an adventure guide</p>
                <p className="Content2">Gujarat is vastly underrated and its a mystery to us why the region isnt more well-</p>
                <div>
                <span className="Content4">Travel</span>
                <p className="Content3"> / August 21 2017</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default LAC1;