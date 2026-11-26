import ArticleType from './ArticleType.jsx'
import ArticleTime from './ArticleTime.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import ArticleText from './ArticleText.jsx'
import '../css/WriteMenu.css'
import React, {useState} from 'react';


/* client sends HTTP req to server */
async function sendData(formElement){

  /* FormData natively reads from a <form> element */
  const formData = new FormData(formElement);

  /* send HTTP req, wait for response */
  const path = "/api/sendArticle";
  const response = await fetch(path, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    /* FormData obj -> .js obj (key-value pair) -> JSON str */
    body: JSON.stringify(Object.fromEntries(formData)),
  });

/* JSON str -> JSON.parse = .js obj (key-value pair) -> call .js attr */
const data = await response.json()
window.alert(data.message);

}
/*
  stop form submission
  supply the <form> that called the event
*/
function overrideSubmit(event){
  event.preventDefault();
  sendData(event.currentTarget);
}

function WriteMenu(){
  /* refreshes on false state */
  const[isOpen, setIsOpen] = useState(false);

  return(
    <>
      
      {!isOpen &&(
      <button className="openClick" onClick={() => setIsOpen(true)}>
        Write Article
      </button>
      )}

      {isOpen &&(
        <div className="WriteMenu">

          {/* title + "X" */}
          <div className="topBar">
            <h2 className="title">Create Article</h2>
            {/* 
              the callback pattern instead of function(value) lets the 
              function get called on event, instead of everytime, event
              or not (i.e. on every screen render)
            */}
            <span className="close" onClick={() => {setIsOpen(false)}}>X</span>
          </div>
          
          {/* input menu */}
          <form onSubmit={overrideSubmit}>
            <div className='ArticleAttributes'>
              <ArticleType />
              <ArticleTime />
              <ArticleTitle />
            </div>
            <br />
            <ArticleText />
            <br />
            <button className="submit" type='submit'>Submit</button>
          </form>

        </div>
      )}

        
    </>
  )
}

export default WriteMenu