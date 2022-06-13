import axios from "axios";
import { useEffect, useState } from "react";
import ListItem from "./ListItem";

function List() {
  const [items, setItems] = useState([]);

  useEffect(function(){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(({data}) => setItems(data));
  })
  return ( 
    <>
    <ul>
      {items.map(item => <ListItem {...item} />)}
    </ul>
    </>
   );
}

export default List;