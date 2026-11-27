import '../css/OneArticle.css'
function OneArticle({articleType, articleTime, articleTitle, articleText}){
  const t1 = 'lorem ipsum dolor sit amet consectetur adipiscing elit pariatur adipiscing qui mollit harum qui qui esse voluptate ea eu id id cupiditate est praesentium lorem sit libero lorem ea deserunt cum quo est esse nihil aliquip accusamus atque eiusmod irure harum veniam cillum animi elit officia est reprehenderit quod praesentium molestias qui labore dolorum in dolorem atque id culpa cillum temporibus sint consequat consequat magna';
  const t2 = 'lorem ipsum dolor sit amet consectetur adipiscing elit pariatur adipiscing qui mollit harum qui qui esse voluptate ea eu id id cupiditate est praesentium lorem sit libero lorem ea deserunt cum quo est esse nihil aliquip accusamus atque eiusmod irure harum veniam cillum animi elit officia est reprehenderit quod praesentium molestias qui labore dolorum in dolorem atque id culpa cillum temporibus sint consequat consequat magna';
  const t3 = 'lorem ipsum dolor sit amet consectetur adipiscing elit pariatur adipiscing qui mollit harum qui qui esse voluptate ea eu id id cupiditate est praesentium lorem sit libero lorem ea deserunt cum quo est esse nihil aliquip accusamus atque eiusmod irure harum veniam cillum animi elit officia est reprehenderit quod praesentium molestias qui labore dolorum in dolorem atque id culpa cillum temporibus sint consequat consequat magna';

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
        <div className='botBar'>
          <span className='bot'>
            <p>{t1}</p>
            <p>{t2}</p>
            <p>{t3}</p>
          </span>
        </div>
      </div>
    </>
  )
}

export default OneArticle