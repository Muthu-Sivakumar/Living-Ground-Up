import '../css/OneArticle.css'
function OneArticle({articleType, articleTime, articleTitle, articleText}){

  return(
    <>
      <div className='articleBox'>
        <div className='topLeft'>
          <span className='attr'>
            <span>
              <span className='attrFormat'>Type:</span>
              <span> {articleType}</span>
            </span>
            <span>
              <span className='attrFormat'>Time:</span>
              <span> {articleTime}</span>
            </span>
          </span>
        </div>
        <div className='midBar'>
          <h3 className='mid'>{articleTitle}</h3>
        </div>
        <div className='botBar'>
          <span className='bot'>
            {articleText}
          </span>
        </div>
      </div>
    </>
  )
}

export default OneArticle