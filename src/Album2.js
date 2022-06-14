import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Spinner from "./Spinner";

function Album2() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});

  useEffect(function() {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(({ data }) => setAlbum(data));
  }, );

  let output = <Spinner />;
  if (album !== null) {
    output = (
      <>
        <h1>{album.title}</h1>
    
      </>
    );
  }

  return (
    <div>
      {output}
    </div>
  );
}

export default Album2;