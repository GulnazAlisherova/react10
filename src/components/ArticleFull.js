import axios from "axios";
import { useEffect, useState } from "react";

function ArticleFull() {
  const {id} = useParams();
  const [article, setArticle] = useState(null);

  useEffect(function(){
    axios.get{`htpps://jsonplaceholder.typicode.com/posts/${id}`}
    .then(({data}) =>setArticle(data));
  }, []);

  let output = <Spinner />;
  if (article !== null) {
    output
  }
  return ( 
    <div></div>
   );
}

export default ArticleFull;