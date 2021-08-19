import {createCar, getCars} from "../../services/Services";
import {useEffect, useState} from "react";
import Car from "../cars/Car";

export default function Form() {
const [formState, setFormState] = useState({})
const [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars(value))
    }, [])

    const hendler = ({target: {name, value}}) => {
        setFormState({...formState, [name]: value})
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
        createCar(formState).then(value => setCars([...cars, value]))

    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input onInput={hendler} type="text" name={'model'} placeholder='model' maxLength={20}/>
                <input onInput={hendler} type="number" name={'price'} placeholder='price' min={0}/>
                <input onInput={hendler} type="number" name={'year'} placeholder='year' min={1990} max={2021}/>
                <button>Save</button>
            </form>
            <hr/>
            <div>
                {
                    cars.map(item => <Car iteem={item} key={item.id} /> )
                }
            </div>
        </div>
    );
}