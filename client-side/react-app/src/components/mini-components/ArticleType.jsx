function ArticleType(){
  return(
    <>
    <span>
      <label>Type: </label>
      <select id="article-types" name="articleType">
        <option value="PoM - Bullet-proof">PoM - Bullet-proof</option>
        <option value="PoM - Self-sustaining">PoM - Self-sustaining</option>
        <option value="PoM - Well-protected">PoM - Well-protected</option>
      </select>
    </span>
    </>
  )
}

export default ArticleType
