import '../css/ArticleText.css'

function ArticleText(){
  return(
    <>
    <span>
      <div class="text">Type article below:</div>
      <textarea class="textBox" placeholder="Enter text here" rows="10"></textarea>
    </span>
    </>
  )
}

export default ArticleText