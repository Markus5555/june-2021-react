import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/user.service";
import Posts from "../posts/Posts";

export default function User({item: {id, name}}) {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getPostsOfUser(id).then(({data}) => setPosts([...data]))
    }, [id])


    return (
        <div>
            {id} {name}
            <Posts items={posts}/>
        </div>
    );
}