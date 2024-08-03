import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Edit() {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
      const { Id } = useParams();
      const navigate = useNavigate();
      console.log(Id);
      useEffect(() => {
        axios.get(`https://66ae53a6b18f3614e3b767c0.mockapi.io/axioss/${Id}`)
        .then((res) => {
            setFormData(res.data);
        console.log(res.data);
    })
      }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // axios.post(`https://66ae53a6b18f3614e3b767c0.mockapi.io/axioss/${Id}`, {name: formData.name, email: formData.email})
    if(formData.name === '' || formData.email === ''){
        alert('Please fill all the fields')
         return;
    } else{

        axios.put(`https://66ae53a6b18f3614e3b767c0.mockapi.io/axioss/${Id}`, {name: formData.name, email: formData.email})
        .then((res) => {
            console.log(res.data);
            navigate('/read')
        })
    }
    

    console.log('Form Data:', formData);
  };
  
  if(!formData){
    return <div>Loading...</div>
  }

  return (
    <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        className="bg-white p-6 rounded shadow-md w-full max-w-sm" 
        onSubmit={handleEdit}
      >
        <h2 className="text-2xl font-bold mb-4">Edit</h2>
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
            Edit
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Edit