import ArticleType from './ArticleType.jsx'
import ArticleTime from './ArticleTime.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import ArticleText from './ArticleText.jsx'
import '../css/WriteMenu.css'
import React, {useState} from 'react';

function WriteMenu(){
  // tracks if div is open
  const[isOpen, setIsOpen] = useState(false);

  return(
    <>
      
      {!isOpen &&(
      <button class="openClick" onClick={() => setIsOpen(true)}>
        Write Article
      </button>
      )}

      {isOpen &&(
        <div class="WriteMenu">
        <div class="topBar">
          <h2 class="title">Create Article</h2>
          <span class="close" onClick={() => setIsOpen(false)}>X</span>
        </div>
        <div class='ArticleAttributes'>
          <ArticleType />
          <ArticleTime />
          <ArticleTitle />
        </div>
        <br />
        <ArticleText />
      </div>
      )}

        
    </>
  )
}

export default WriteMenu