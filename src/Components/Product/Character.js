export default function Character({user}) {

    let { name, surname, age, info, photo } = user;
    return (
        <div>
            <div>
                <h2>Name: {name}</h2>
                <h2>Surname: {surname}</h2>
                <h2>Age: {age}</h2>
                <h2>{info}</h2>
                <h2>{photo}</h2>
                <img src={photo} alt={'img'}/>
                <hr/>
            </div>
            </div>
            );


    }