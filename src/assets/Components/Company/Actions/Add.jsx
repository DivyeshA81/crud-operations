import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyYear, setComapnyYear] = useState("");
    const [companyBrand, setCompanyBrand] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const companyData = {
            name: companyName,
            year: companyYear,
            brand: companyBrand,
        };
        try{
            await axios.post('http://localhost:5000/company', companyData)
            setCompanyName("");
            setComapnyYear("");
            setCompanyBrand("");

            navigate('/company')

        }catch (error){ 
            console.log(error);
        }
    }

  return (
    <div>
      <div>
      <h1 className='text-3xl font-bold'>Add Cars</h1>
      <form
        onSubmit={handleSubmit}
        className='mt-6 p-5 bg-gray-100 rounded-md shadow-md'
      >
       <div className="mb-4">
          <label className="block text-lg font-medium">Car Name:</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="mt-2 px-4 py-2 border rounded-md w-full"
            placeholder="Enter car name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Car Manufacturing Year:</label>
          <input
            type="number"
            value={companyYear}
            onChange={(e) => setComapnyYear(e.target.value)}
            className="mt-2 px-4 py-2 border rounded-md w-full"
            placeholder="Enter car manufacturing year"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium">Car Company Brand:</label>
          <select
            value={companyBrand}
            onChange={(e) => setCompanyBrand(e.target.value)}
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

        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Car
        </button>
      </form>
    </div>
    </div>
  )
}

export default Add
