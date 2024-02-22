import "./Hero.css"

function Hero () {
    return(
        <>
        <div className="Container">
            <div className="iconTdiv">
                <img src="./src/assets/desktop-icon.svg" width={96} height={96}/>
                <ul className="ul">
                    <li><span>Overview</span></li>
                    <li>Release Notes</li>
                    <li>Help</li>
                </ul>
            </div>
        <div className="GitHub">
            <p className="pg">GitHub Desktop</p>
            <p className="pg2">Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.</p>
            <button>Downlod for Windows (64bit)</button>
        </div>
        <div className="HubT">

        <div className="Div1">
        <h4>Feeling brave? </h4>
        <p>Try new features in the <span><img src="./src/assets/beaker.svg"/> <a href="#">Beta<br/> Channel</a></span> before they're released.</p>
        </div>
       
        <div className="Div1">
        <h4>Prefer the MSI?</h4>
        <p>Download for <span> <a href="#"> Windows (MSI) </a></span></p>
        </div>

        <div className="Div1">
        <h4>macOS?</h4>
        <p>Download for <span> <a href="#"> macOS </a></span></p>
        </div>

        </div>
        <p className="pTag">By downloading, you agree to the <a href="#"> Open Source Applications Terms.</a></p>
       <div className="ImgScreen">
       <img src="./src/assets/screenshot-windows-light.png"/>
       </div>
        </div> 
        </>
    )
}


export default Hero 