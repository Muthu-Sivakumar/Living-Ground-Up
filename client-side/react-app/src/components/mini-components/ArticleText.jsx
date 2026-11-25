import '../css/ArticleText.css'

function ArticleText(){
  return(
    <>
    <span>
      <div className="text">Type article below:</div>
      <textarea className="textBox" placeholder="Enter text here" rows="10"
                name="articleText"></textarea>
    </span>
    </>
  )
}

export default ArticleText