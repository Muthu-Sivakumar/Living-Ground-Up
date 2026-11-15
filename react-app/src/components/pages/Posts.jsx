import '../css/BoxMain.css'
import TitleMain from '../TitleMain.jsx'
import Navbar from '../Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../TitleSub.jsx'
import WriteMenu from '../WriteMenu.jsx'

function Posts(){

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Posts' />
        </div>
        <WriteMenu />
      </div>
    </>
  )

}

export default Posts