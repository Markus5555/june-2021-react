import Geo from "../geo/Geo";
export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div>
            <div>
                <h1>Address:</h1>
                <h3>Street: {street}</h3>
                <h3>Suite: {suite}</h3>
                <h3>City: {city}</h3>
                <h3>Zipcode: {zipcode}</h3>
                <Geo {...geo}/>

            </div>

        </div>
    );
}