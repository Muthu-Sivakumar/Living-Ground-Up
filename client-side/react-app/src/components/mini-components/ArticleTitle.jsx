function ArticleTitle(){
  return(
    <>
    <span>
      <label htmlFor="text">Title: </label>
      <textarea placeholder="Enter title here"
                name="articleTitle" rows="1"></textarea>
    </span>
    </>
  )
}

export default ArticleTitle