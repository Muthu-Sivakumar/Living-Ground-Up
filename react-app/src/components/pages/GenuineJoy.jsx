import '../css/BoxMain.css'
import TitleMain from '../TitleMain.jsx'
import Navbar from '../Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../TitleSub.jsx'
import TitleSection from '../TitleSection.jsx'

function GenuineJoy(){

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Genuine Joy' />
          <TitleSection title='What is "Genuine Joy"?' />
          <em>** Page will contiue development J.I.T.! **</em>
        </div>

      </div>
    </>
  )

}

export default GenuineJoy