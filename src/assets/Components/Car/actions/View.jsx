import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CarViewPage = () => {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Fetch the car details by ID
    axios
      .get(`http://localhost:5000/cars/${id}`)
      .then((response) => {
        setCar(response.data); // Set car data in the state
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, [id]); // Re-fetch when the id changes

  if (!car) {
    return <div>Loading car details...</div>; // Loading state
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
  );
};

export default CarViewPage;
