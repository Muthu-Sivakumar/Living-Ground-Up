import '../css/BoxMain.css'
import TitleMain from '../mini-components/TitleMain.jsx'
import Navbar from '../mini-components/Navbar.jsx'
import '../css/BoxSub.css'
import TitleSub from '../mini-components/TitleSub.jsx'
import WriteMenu from '../mini-components/WriteMenu.jsx'
import ShowArticles from '../mini-components/ShowArticles.jsx'

function Articles(){

  return (
    <>
      <div className="BoxMain">
        
        <TitleMain />
        <Navbar />
        <div className="BoxSub">
          <TitleSub title='Articles' />
          <WriteMenu />
          <ShowArticles />
        </div>
      </div>
    </>
  )

}

export default Articles