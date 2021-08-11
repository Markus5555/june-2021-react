import { Address } from "../Address/Address";

export default function Obj ({user}){
    let {id, name, username, address} = user
    return(
        <div>
            <div>
                <h2>Id: {id}</h2>
                <h2>name: {name}</h2>
                <h2>Username: {username}</h2>
                <Address address={address}/>

                <hr/>
            </div>
        </div>
    )

}
