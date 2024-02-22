import './App.css'
import Hero from "./Hero"
import Image from "./Image"
import Text from "./Text"
import Icon from "./Icon"
import IconText from "./IconText"

function App() {

  return (
    <>
    <div className="Body">
      <Hero/>

     <div className="DT">

     <Image Img="./src/assets/co-authoring.png" />
     <Text Text= "Attribute commits with collaborators easily"
           Text2="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution, and see the co-authors on github.com"
     />
     <Text Text="Checkout branches with pull requests and view CI statuses"
           Text2="See all open pull requests for your repositories and check them out as if they were a local branch, even if they're from upstream branches or forks. See which pull requests pass commit status checks, too!"
     />
     <Image Img="./src/assets/pr-checks.png"/>
     <Image Img="./src/assets/syntax-highlighting.png"/>
     <Text Text="Syntax highlighted diffs"
          Text2="The new GitHub Desktop supports syntax highlighting when viewing diffs for a variety of different languages."
     />

     </div>

     <div className="MainIconD">
    
      <div className="subDiv">
      <div className="IconD1">
      <Icon Icon="./src/assets/file-media.svg"/>
      </div>
      <IconText p1="Expanded image diff support" p2="Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts."/>
      </div>

      <div className="subDiv">
      <div className="IconD1">
      <Icon Icon="./src/assets/terminal.svg"/>
      </div>
      <IconText p1="Extensive editor & shell integrations" p2="Open your favorite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work."/>
      </div>

      
      <div className="subDiv">
      <div className="IconD1">
      <Icon Icon="./src/assets/organization.svg"/>
      </div>
      <IconText p1="Community supported" p2="GitHub Desktop is open source now! Check out our roadmap, contribute, and help us make collaboration even easier." />
      </div>

     </div>

<div className="BtnDiv">
<button className='button'>See what's been built</button>
</div>

<div className="AtagDiv">
  <hr/>
  <div className="aDiv">
  <a href='#'>Terms</a>
  <a href='#'>Privacy policy</a>
  <a href='#'>EULA</a>
  <a href='#'>Release Notes</a>
  </div>
  <p>© 2023 GitHub, Inc. All rights reserved.</p>
</div>
    </div>
     
    </>
  )
}

export default App
