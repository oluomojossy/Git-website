import "./Text.css"

function Text (props) {
    return(
        <>
        <div className="DivText1">
            <p className="propT">{props.Text}</p>
            <p className="propT2">{props.Text2}</p>
        </div>
        </>
    )
}




export default Text