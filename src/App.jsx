import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    axios.post('https://66ae53a6b18f3614e3b767c0.mockapi.io/axioss', formData)
    setFormData({
      name: '',
      email: ''
    })
    navigate('/read')

    console.log('Form Data:', formData);
  };

  return (
    <>
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        className="bg-white p-6 rounded shadow-md w-full max-w-sm" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Create</h2>
        <div className="mb-4">
          <label 
            htmlFor="name" 
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder='Enter Your Name'
            value={formData.name} 
            onChange={handleChange} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
        </div>
        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input 
            placeholder='Enter Your Email'
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            required 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
