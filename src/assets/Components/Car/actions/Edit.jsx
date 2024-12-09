import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carName, setCarName] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carBrand, setCarBrand] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/cars/${id}`)
        const carData = response.data;
        setCarName(carData.name);
        setCarYear(carData.year);
        setCarBrand(carData.brand);
      }catch(error) {
        console.error(error) ;
        
        alert('Failed to fetch car data.')
      }
    };
    fetchCar();
  },[id])



  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateCarData = {
      name: carName,
      year: carYear,
      brand: carBrand,
    }

    try {
      await axios.put(`http://localhost:5000/cars/${id}`, updateCarData)
      alert('Car updated successfully.')
      navigate(`/car`)
    }catch (err) {
      console.error(error) ;
      alert('Failed to update car data.')
    }
  }

  return (
    <div>
    <h1 className="text-3xl font-bold">Edit Car Page</h1>
    <form
      onSubmit={handleSubmit}
      className="mt-6 p-5 bg-gray-100 rounded-md shadow-md"
    >
      {/* Car Name */}
      <div className="mb-4">
        <label className="block text-lg font-medium">Car Name:</label>
        <input
          type="text"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          className="mt-2 px-4 py-2 border rounded-md w-full"
          placeholder="Enter car name"
          required
        />
      </div>

      {/* Car Manufacturing Year */}
      <div className="mb-4">
        <label className="block text-lg font-medium">Car Manufacturing Year:</label>
        <input
          type="number"
          value={carYear}
          onChange={(e) => setCarYear(e.target.value)}
          className="mt-2 px-4 py-2 border rounded-md w-full"
          placeholder="Enter car manufacturing year"
          required
        />
      </div>

      {/* Car Brand */}
      <div className="mb-4">
        <label className="block text-lg font-medium">Car Company Brand:</label>
        <select
          value={carBrand}
          onChange={(e) => setCarBrand(e.target.value)}
          className="mt-2 px-4 py-2 border rounded-md w-full"
          required
        >
          <option value="">Select a brand</option>
          <option value="Toyota">Toyota</option>
          <option value="Ford">Ford</option>
          <option value="BMW">BMW</option>
          <option value="Honda">Honda</option>
          <option value="Audi">Audi</option>
        </select>
      </div>

      {/* Update Button */}
      <button
        type="submit"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Update Car
      </button>
    </form>
  </div>
  )
}

export default Edit