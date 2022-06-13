import axios from "axios";
import { useEffect, useState } from "react";
import Article from "../Article";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(function () {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => setArticles(data));
  }, []); //https://jsonplaceholder.typicode.com/

  return (
    <ul>
      {articles.map(article => <Article {...article} />)}
    </ul>
  );
}

export default Articles;