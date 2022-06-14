import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import Spinner from "./components/Spinner";

function Photos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(({ data }) => {
        setPhotos(data);
        setLoading(false);
      });
  }, []);


  let output = <Spinner />;
  if (!loading) {
    output = photos
      .slice(0, 5)
      .map(photo => <Photo key={photo.id} {...photo} />);
  }

  return (
    <div className="Photos">
      {output}
    </div>
  );
}

export default Photos;