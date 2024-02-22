import "./Icon"

function Icon (props) {
    return(
        <>
        <div className="DDimg">
            <img src={props.Icon} style={{width:"210%", height:"210%"}}/>
        </div>
        </>
    )
}


export default Icon