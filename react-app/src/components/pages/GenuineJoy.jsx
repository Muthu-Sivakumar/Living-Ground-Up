import '../css/BoxMain.css'
import TitleMain from '../mini-components/TitleMain.jsx'
import Navbar from '../mini-components/Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../mini-components/TitleSub.jsx'
import TitleSection from '../mini-components/TitleSection.jsx'

function GenuineJoy(){

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Genuine Joy' />
          <TitleSection title='What is "Genuine Joy"?' />
          <p><em>** Page will contiue development J.I.T.! **</em></p>
        </div>

      </div>
    </>
  )

}

export default GenuineJoy