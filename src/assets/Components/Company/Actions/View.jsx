import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);

    useEffect(()=> {
        axios.get(`http://localhost:5000/company/${id}`)
        .then((response) => {
            setCar(response.data)
        })
        .catch((error) => {
            console.error('Error fetching car details:', error)
        })
    }
,[id])

if(!car) {
    return <div>Loading Company details</div>
}

  return (
    
       <div className="mt-8 p-5 bg-gray-100 rounded-md">
      <h1 className="text-3xl font-bold mb-4">Car Details</h1>
      <div>
        <p><strong>Car Name:</strong> {car.name}</p>
        <p><strong>Manufacturing Year:</strong> {car.year}</p>
        <p><strong>Car Brand:</strong> {car.brand}</p>
      </div>
    </div>
  )
}

export default View
