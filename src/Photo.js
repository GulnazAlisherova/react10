import { Link } from "react-router-dom";

function Photo({ title, id, thumbnailUrl }) {
  return (
    <div>
    <h1>
      <Link to={`/photos/${id}`}>{title}</Link>
    </h1>
    <img src={thumbnailUrl} alt={title}/>
 
  </div>
  );
}

export default Photo;