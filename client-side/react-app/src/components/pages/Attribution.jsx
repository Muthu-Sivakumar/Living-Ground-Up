import '../css/BoxMain.css'
import TitleMain from '../mini-components/TitleMain.jsx'
import Navbar from '../mini-components/Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../mini-components/TitleSub.jsx'
import TitleSection from '../mini-components/TitleSection.jsx'
import '../css/Attribution.css'
import {Link} from 'react-router'

function Attribution(){
  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Attributions' />
          
          <TitleSection title="Website's Icon in Browser Tab" />
          <p>Pixel art potted plant (I altered background opacity to 0%) - Image by magnific 
            (
              <a href="https://www.magnific.com/free-vector/flat-
              design-flower-pixel-art-illustration_23320730.htm"
              target='_blank'>
                  link
              </a>
            )
          </p>
          <TitleSection title=" 'About this Site' Page" />
          <p>TBD (<Link to="/Attribution">link</Link>)</p>

          <TitleSection title=" 'Living with Peace of Mind' Page" />
          <p>TBD (<Link to="/Attribution">link</Link>)</p>
          
          <TitleSection title=" 'Living with Genuine Joy' Page" />
          <p>TBD (<Link to="/Attribution">link</Link>)</p>
        </div>

      </div>
    </>
  )

}

export default Attribution