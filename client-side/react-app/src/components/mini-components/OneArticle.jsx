import '../css/OneArticle.css'
function OneArticle(articleType, articleTime, articleTitle, articleText){
  return(
    <>
      <div className='articleBox'>
        <div className='topBar'>
          <h2 className='title'>articleTitle</h2>
        </div>
        <div className='midBar'>
          <span className='left'>articleType</span>
          <span className='right'>articleTime</span>
        </div>
      </div>
    </>
  )
}

export default OneArticle