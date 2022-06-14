import axios from "axios";
import { useEffect, useState } from "react";
import ArticleTeaser from "./ArticleTeaser";
import Spinner from "./Spinner";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);


  let output = <Spinner />;
  if (!loading) {
    output = articles
      .slice(0, 5)
      .map(article => <ArticleTeaser key={article.id} {...article} />);
  }

  return (
    <div className="Articles">
      {output}
    </div>
  );
}

export default Articles;