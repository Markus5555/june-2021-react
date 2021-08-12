import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(({data}) => setUsers(data))
    })

    return (
        <div>
        <div>
            {
                users.map(userItem => <User key={users.id} item={userItem}/>)
            }
        </div>
        </div>
    );
}