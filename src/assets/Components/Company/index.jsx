import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const index = () => {

    const navigate = useNavigate()
    const [company, setComapany] = useState([]);

    const handleAddCompany = () => {
        navigate('/company-add')
    }

    const handleViewCompany = (id) => {
        navigate(`/company-view/${id}`)
    }



  return (
    <div>
      <h1 className="text-3xl font-bold">Car Page</h1>

      {/* Add Car Button in Top Right Corner */}
      <button
        onClick={handleAddCompany}
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
            {company.map((company) => (
              <tr key={company.id}>
                <td className="border p-4">{company.name}</td>
                <td className="border p-4">{company.year}</td>
                <td className="border p-4">{company.brand}</td>
                <td className="border p-4">
                  {/* <button
                    onClick={() => handleEditCompany(company.id)}
                    className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                  >
                    Edit
                  </button> */}
                  <button
                    onClick={() => handleViewCompany(company.id)}
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    View
                  </button>
                  {/* <button
                    onClick={() => handleDeleteCar(company.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default index
