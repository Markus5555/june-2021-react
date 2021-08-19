const getCars = () =>{
   return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'GET',
    })
       .then(value => value.json())

}

const createCar = (obj) =>{

   return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(obj),
       headers: {
           'Content-type': 'application/json; charset=UTF-8',
       },
    })


}

export {getCars, createCar}