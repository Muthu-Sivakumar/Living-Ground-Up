import OneArticle from "./OneArticle.jsx"
import { useEffect, useState } from "react";

function ShowArticles(){
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();

  /* runs side-effects after components render.*/
  useEffect(async function(){
    let article_list = [];
    try{
      const path = "/api/getArticles";
      const response = await fetch(path, {method: 'GET'});
      if(response.ok){
        /* code retrieving articles */
        article_list = await response.json();
        console.log('received articles from MongoDB!');
      }
      else
        console.error('Server-side error within req/res: ', response.status);
      
    }
    catch(e){
      console.error('Network error sending/receiving req/req: ', e);
    }
    return function(){
      setIsLoading(false);
      setArticles(article_list);
      console.log("Done loading articles. Will render now.");
    }  
  }, [])

  
  const t1 = 'lorem ipsum dolor sit amet consectetur adipiscing elit pariatur adipiscing qui mollit harum qui qui esse voluptate ea eu id id cupiditate est praesentium lorem sit libero lorem ea deserunt cum quo est esse nihil aliquip accusamus atque eiusmod irure harum veniam cillum animi elit officia est reprehenderit quod praesentium molestias qui labore dolorum in dolorem atque id culpa cillum temporibus sint consequat consequat magna';

  return (
    <>
      if(isLoading){
        <p>Loading articles...</p>
      }
      else{
        {articles.map((article) =>{
          <OneArticle 
            articleType={article.articleType}
            articleTime={article.articleTime}
            articleTitle={article.articleTitle}
            articleText={article.articleText}
          />
        })}
      }

      <OneArticle 
        articleType="Type B"
        articleTime="11/27/26"
        articleTitle="Hmmm.... My First Title"
        articleText={t1}/>
      
    </>
  )
}

export default ShowArticles