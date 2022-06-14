import { Link } from "react-router-dom";

function ArticleTeaser({ id, title, body }) {
  return (
    <article>
      <h2>
        <Link to={`/articles/${id}`}>{title}</Link>
      </h2>
      <p>{body}</p>
    </article>
  );
}

export default ArticleTeaser;