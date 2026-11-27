import OneArticle from "./OneArticle.jsx"

/* the total of all articles (for loop of single articles) */
function ShowArticles(){
  const t1 = 'lorem ipsum dolor sit amet consectetur adipiscing elit pariatur adipiscing qui mollit harum qui qui esse voluptate ea eu id id cupiditate est praesentium lorem sit libero lorem ea deserunt cum quo est esse nihil aliquip accusamus atque eiusmod irure harum veniam cillum animi elit officia est reprehenderit quod praesentium molestias qui labore dolorum in dolorem atque id culpa cillum temporibus sint consequat consequat magna';

  return (
    <>
      <OneArticle 
        articleType="Type B"
        articleTime="11/27/26"
        articleTitle="Hmmm.... My First Title"
        articleText={t1}/>
      
    </>
  )
}

export default ShowArticles