export default function Character({name, surname, age, info}) {
    let classNameTitle = 'character'
    return (
        <div className={classNameTitle}>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <h2>{age}</h2>
            <h2>{info}</h2>
            <hr/>
        </div>
    );
}