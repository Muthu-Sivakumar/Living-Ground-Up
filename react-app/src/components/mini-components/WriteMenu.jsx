import ArticleType from './ArticleType.jsx'
import ArticleTime from './ArticleTime.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import ArticleText from './ArticleText.jsx'
import '../css/WriteMenu.css'

function openClick(){
  window.alert("you opened me!");
}
function closeCLick(){
  window.alert("you closed me!");
}

function WriteMenu(){
  return(
    <>
      <button class="openClick" onClick={openClick}>
        Write Article
      </button>
      <div class="WriteMenu">
        <div class="topBar">
          <h2 class="title">Create Article</h2>
          <span class="close" onClick={closeCLick}>X</span>
        </div>
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