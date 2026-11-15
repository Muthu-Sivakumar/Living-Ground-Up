import '../css/BoxMain.css'
import TitleMain from '../mini-components/TitleMain.jsx'
import Navbar from '../mini-components/Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../mini-components/TitleSub.jsx'
import WriteMenu from '../mini-components/WriteMenu.jsx'

function Posts(){

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Posts' />
          <WriteMenu />
        </div>
      </div>
    </>
  )

}

export default Posts