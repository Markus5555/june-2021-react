import {useEffect, useState} from "react";
import {getCommentsOfUser} from "../../services/user.service";
import Comments from "../comments/Comments";

export default function Posts({items}) {

  let [comments, setComments] = useState([])

  useEffect(() =>{
    getCommentsOfUser(items.id).then(({data}) => setComments([...data]))
      }, [items.id]
  )
  return (
    <div>{
      items.map(value => <div>{value.title}</div>)
    }
    <Comments items={comments}/>
    </div>
  );
}