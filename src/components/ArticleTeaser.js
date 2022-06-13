function ArticleTeaser() {
  return ( 
    <article>
      <h2>
        <Link to={`/articles${id}`}></Link>
      </h2>
      <p>{body}</p>
    </article>
   );
}

export default ArticleTeaser;