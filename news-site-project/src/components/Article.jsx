function Article(props) {
 
  return (
    <div>
      {props.image ? <img src={props.image.url}/> : <p>Image not found!</p>}
    </div>
  )
}

export default Article;
