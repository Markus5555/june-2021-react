import Address from "../Address/Address";
import Company from "../company/Company";

export default function Obj ({user}){
    let {id, name, username, address, phone, website, company} = user
    return(
        <div>
            <div>
                <h2>Id: {id}</h2>
                <h2>name: {name}</h2>
                <h2>Username: {username}</h2>
                <Address {...address}/>
                <h2>Phone: {phone}</h2>
                <h2>Website: {website}</h2>
                <Company {...company}/>


            </div>
        </div>
    )

}