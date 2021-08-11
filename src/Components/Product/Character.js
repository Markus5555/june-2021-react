export default function Obj ({user}){
    let {id, name, username} = user
    return(
        <div>
            <div>
                <h2>Id: {id}</h2>
                <h2>name: {name}</h2>
                <h2>Username: {username}</h2>
                {/*<h2>Address: {address}</h2>*/}

                <hr/>
            </div>
        </div>
    )

}