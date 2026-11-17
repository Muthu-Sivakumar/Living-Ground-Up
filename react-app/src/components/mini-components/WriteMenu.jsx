import ArticleType from './ArticleType.jsx'
import ArticleTime from './ArticleTime.jsx'
import ArticleTitle from './ArticleTitle.jsx'
import ArticleText from './ArticleText.jsx'
import '../css/WriteMenu.css'
import React, {useState} from 'react';


// we are using an async function to act as a neat promise chain
// in this case, we tell the program
  // "you can run this code until an async operation is hit"
  // "at that point, send it to the background (web/runtime api)"
  // "you continue your work else where, then comeback here when the
    // "background work is done"
// this allows the rest of the program to function until this part is done
// we use "async" on the function bc we use "await" keyword
async function sendData(formElement){
  // FormData obj is a type of payload sent in the fetch method
  // there are 6 body types for fetch
  // we use FormData bc it natively reads from a <form> element

  const formData = new FormData(formElement);

  // retrieve and create response (use "await" bc fetch returns a promise)
  // while waiting to fetch the data's header, rest of frontend dev can run
  const url = "http://localhost:5173/Articles";
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  // while waiting to fetch the rest of the data AND parse into JSON, rest of 
  // frontend can run
  window.alert(await response.json());

}
function overrideSubmit(event){
  // in this case, the event was the form submission
  // event.currentTarget supplies the element that called the event (the <form> element)
  event.preventDefault();
  sendData(event.currentTarget);
}

function WriteMenu(){
  // begins at false state
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
              function get called with a supplied value on event, instead
              of everytime, event or not (i.e. on every screen render)
            */}
            <span className="close" onClick={() => setIsOpen(false)}>X</span>
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
            <button className="submit" type='submit'>test</button>
          </form>

        </div>
      )}

        
    </>
  )
}

export default WriteMenu