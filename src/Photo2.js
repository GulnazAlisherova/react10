import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";

function Photo2() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

  useEffect(function() {
    axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(({ data }) => setPhoto(data));
  }, );

  let output = <Spinner />;
  if (photo !== null) {
    output = (
      <>
        <h2>{title}</h2>
     
        <img src={thumbnailUrl} alt={title}/>
    
      </>
    );
  }

  return (
    <div>
      {output}
    </div>
  );
}

export default Photo2;