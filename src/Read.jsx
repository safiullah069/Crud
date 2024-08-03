import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Read() {

    const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://66ae53a6b18f3614e3b767c0.mockapi.io/axioss');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    // Handle edit logic here
    navigate(`/edit/${id}`);

    console.log('Edit item with id:', id);
  };

  const handleDelete = (id) => {
    axios.delete(`https://66ae53a6b18f3614e3b767c0.mockapi.io/axioss/${id}`)
      .then(response => {
        // Handle success
        console.log('Item deleted successfully:', response.data);
        // Update the data state to remove the deleted item
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => {
        // Handle error
        console.error('Error deleting item:', error);
      });
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
  }

  
  return (
    <>
       <div className="my-16 flex items-center justify-center  bg-white">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">ID</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50">Email</th>

            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
                <td className="py-2 px-4 border-b border-gray-200">{item.email}</td>
                <td className="py-2 px-4 border-b border-gray-200">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
    <button className='flex justify-center items-center my-16 px-4 py-2 m-auto bg-blue-600 text-white rounded-md'>
        <NavLink to="/">Create</NavLink>
    </button>
    </>
  )
}

export default Read