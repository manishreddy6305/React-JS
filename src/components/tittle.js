import "./../Styles/title.css"
function Tittle(props){
    return(
        <>
        <div className="tittle">
            <h2 className="tittle">{props.td.one}</h2>
            <hr className="hr"></hr>
        </div>
        </>
    )
}
export default  Tittle;