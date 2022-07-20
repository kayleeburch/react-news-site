import Article from './Article';
import ArticleTeaser from './ArticleTeaser';

import {useState} from 'react'

function ArticleGroup({article}) {

    const[showArticle, setShowArticle] = useState(false)

    const renderIfShow = () => {
        if(showArticle){
          return <Article {...article}/>
        }
      }

    const HandleTitleClick = (article_id) => {
    console.log(article_id)
    setShowArticle(!showArticle)

    }


    return(
        <div>
            <ArticleTeaser id={article.id} title={article.title} created_date={article.created_date} handleClick={HandleTitleClick}/>
            {showArticle ? <Article {...article}/> : ''}
            {/* {showArticle && <Article {...article}/>} */}
            {/* {renderIfShow()} */}
        </div>
    )
}
export default ArticleGroup