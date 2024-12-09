import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Car = () => {
  const { id} = useParams();
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cars");
        setCars(response.data); // Store the list of cars in state
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []); 

  const handleAddCar = () => {
    navigate("/add-car"); 
  };

  const handleEditCar = (id) => {
    navigate(`/edit-car/${id}`); 
  };

  const handleViewCar = (id) => {
    navigate(`/view-car/${id}`); 
  };

  // Handle deleting a car
  const handleDeleteCar = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/cars/${id}`);
      if (response.status === 200) {
        setCars(cars.filter((car) => car.id !== id));
        console.log("Car deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Car Page</h1>

      {/* Add Car Button in Top Right Corner */}
      <button
        onClick={handleAddCar}
        className="absolute top-5 right-5 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Car
      </button>

      {/* Display the list of cars in a table */}
      <div className="mt-10">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-4">Car Name</th>
              <th className="border p-4">Car Year</th>
              <th className="border p-4">Car Brand</th>
              <th className="border p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td className="border p-4">{car.name}</td>
                <td className="border p-4">{car.year}</td>
                <td className="border p-4">{car.brand}</td>
                <td className="border p-4">
                  <button
                    onClick={() => handleEditCar(car.id)}
                    className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleViewCar(car.id)}
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeleteCar(car.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Car;
