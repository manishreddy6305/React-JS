import "./../Styles/LSC.css"
var st;
function LSC(props){
    if(props.verify===1)
    {
          st="verify";
    }
    else
    {
        st="ls";
    }
    return(
        <>
        <div className={st}>
        <h1 className="lschead">Catch Waves with an adventure guide</h1>
        <p className="lsccontent">Gujarat is vastly underrated and its a mystery to us why the region isnt more well- known as a tourist destination.It has a plethora of temples and palaces.Gujarat is vastly unrated and its a mystery to uswhy the region isn't more well know as a tourist destination.It has a plethora of temples and palaces.</p>
        <div>
                <span className="Content4">{props.td.one}</span>
                <p className="Content3">{props.td.two}</p>
                </div>
        </div>

        </>
    )
}
export default LSC;