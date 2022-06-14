import axios from "axios";
import { useEffect, useState } from "react";
import Album from "./Album";
import Spinner from "./Spinner";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(({ data }) => {
        setAlbums(data);
        setLoading(false);
      });
  }, []);


  let output = <Spinner />;
  if (!loading) {
    output = albums
      .slice(0, 5)
      .map(album => <Album key={album.id} {...album} />);
  }

  return (
    <div className="Albums">
      {output}
    </div>
  );
}

export default Albums;