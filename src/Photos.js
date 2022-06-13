import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "./Photo";

function Photos() {
  const [photo, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {photo.map((photo) => (<Photo {...photo} />))}
    </div>
  );
}

export default Photos;