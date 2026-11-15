import ArticleType from './ArticleType.jsx'
import ArticleTime from './ArticleTime.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import ArticleText from './ArticleText.jsx'
import './css/WriteMenu.css'

function WriteMenu(){
  return(
    <>
      <div class="WriteMenu">
        <h2 class="TitleSub">
          Create Article
        </h2>
        <div class='ArticleAttributes'>
          <ArticleType />
          <ArticleTime />
          <ArticleTitle />
        </div>
        <br />
        <ArticleText />
      </div>
        
    </>
  )
}

export default WriteMenu