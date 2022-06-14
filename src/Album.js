import { Link } from "react-router-dom";

function Album({ title,  id }) {
  return (
    <div>
    <h1>
      <Link to={`/albums/${id}`}>{title}</Link>
    </h1>
 
  </div>
  );
}

export default Album;