import './users.css'
import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../services/user.fetch.services";
import User from "../user/User";


export default function Users() {

    let [users, setUsers] = useState([])
    let [posts, setPosts] = useState(null)
    useEffect(() => {

        getUsers().then(value => setUsers([...value]))
    }, [])

    const choseUser = (u) => {
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
            </div>
            {posts &&
            <div className={'chosen-one'}>   // TODO створи окрему компоненту не репрезентуй через JSON.stringify
                {JSON.stringify(posts)}
            </div>
            }
        </div>
    );
}
