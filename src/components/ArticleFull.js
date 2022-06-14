import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

function ArticleFull() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(function() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => setArticle(data));
  }, []);

  let output = <Spinner />;
  if (article !== null) {
    output = (
      <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </>
    );
  }

  return (
    <article>
      {output}
    </article>
  );
}

export default ArticleFull;