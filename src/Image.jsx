import "./Image.css"

function Image (props) {
    return(
        <>
        <div className="Divimg">
            <img src={props.Img} style={{width:"100%", height:"100%"}}/>
            </div>
        </>
    )
}


export default Image