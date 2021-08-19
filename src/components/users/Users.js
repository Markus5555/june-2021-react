import './users.css'
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.fetch.services";
import User from "../user/User";
import Posts from "../posts/Posts";

export default function Users() {

    let [users, setUsers] = useState([])
    // let [user, setUser] = useState(null)
    let [posts, setPosts] = useState(null)
    useEffect(() => {

        getUsers().then(value => setUsers([...value]))
    }, [])

    const choseUser = (u) => {
        // setUser({...u})
        // getPostsOfUser(u.id).then(value => console.log(value))
        getPostsOfUser(u.id).then(value => setPosts(value))
    }

    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User key={value.id}
                                             item={value}
                                             choseUser={choseUser}
                    />)
                }
                {
                    posts.map(value => <Posts key={value.id}
                                              post={value}

                    />)
                }
            </div>
        </div>)
}