// pages/bikes.js

import { useState } from 'react';
import { Bike } from '../types/types'; 
import useSWR, { mutate } from 'swr';
import RootLayout from "../app/layout";
const fetcher = (url:string) => fetch(url).then((res) => res.json());
const BASE_URL = 'http://localhost:3000/api/bikes'
interface BikeFormErrors {
  description?: string;
  rating?: string;
  price?: string;
  quantity?: string;
}

export default function BikesPage() {
  const { data: bikes,error } = useSWR(BASE_URL, fetcher);
  const [editingBike, setEditingBike] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Bike>>({
    description: '',
    rating: 0,
    price: 0,
    quantity: 0,
    type: '',
    photoUrl: '',
  });
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = (bike:Bike) => {
    setEditingBike(bike.id);
    setFormData(bike);
  };

  const handleSaveClick = async () => {
    let errors = validate()
    if (Object.keys(errors).length) {
      alert(JSON.stringify(errors))
    } 
    else {
      const response = await fetch(`${BASE_URL}/${editingBike}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setEditingBike(null);
      mutate('http://localhost:3000/api/bikes');
    }
  };


  const handleDeleteClick = async (id: number) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    mutate(BASE_URL);
  };


  const validate = () => {
    const newErrors: BikeFormErrors = {};
    if(!formData) return false
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.rating || formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be a number between 1 and 5';
    }
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be a positive number';
    }
    if (!formData.quantity || formData.quantity < 0 || !Number.isInteger(formData.quantity)){
      newErrors.quantity = 'Quantity must be a non-negative integer';
    }
    return newErrors
  };

  if (error) return <div>Failed to load bikes.</div>;
  if (!bikes) return <div>Loading...</div>; 

  return (
    <RootLayout>
    <div className="container mx-auto px-4 py-8">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Bike Inventory</h1>
      <button
        onClick={()=>{setIsAdmin(c=>!c)}}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >Toggle Admin Mode</button>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        {bikes.map((bike:Bike) => (
          <div key={bike.id} className="border rounded-lg p-4 shadow-md">
              <>
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl mb-2">{bike.description}</h2>
                  {isAdmin && editingBike !== bike.id ?
                  <button
                    onClick={() => handleEditClick(bike)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>:
                  <div className="flex justify-between items-center gap-2 mb-2">
                    {isAdmin ? 
                    <>
                      <button
                        onClick={handleSaveClick}
                        className="bg-green-500 text-white px-4 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => handleDeleteClick(bike.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded"
                      >
                      Delete
                      </button>
                    </>:null}
                   </div>
                  }
                </div>
                {editingBike === bike.id && isAdmin ? 
                  <div className="flex-column">
                     <div>
                      <p className="mb-1 flex justify-between"><b>Description:</b><input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="text-gray-300 bg-gray-600 px-2"
                        placeholder="Description"
                      /></p>
                      <p className="mb-1 flex justify-between"><b>Rating:</b><input
                        type="number"
                        name="rating"
                        value={formData.rating}
                        onChange={handleChange}
                        className="text-gray-300 bg-gray-600 px-2"
                        placeholder="Rating"
                      /></p>
                      <p className="mb-1 flex justify-between"><b>Price:</b><input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="text-gray-300 bg-gray-600 px-2"
                        placeholder="Price"
                      /></p>
                      <p className="mb-1 flex justify-between"><b>Stock:</b><input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="text-gray-300 bg-gray-600 px-2"
                        placeholder="Quantity"
                      /></p>
                      <p className="mb-1 flex justify-between"><b>Type:</b><input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="text-gray-300 bg-gray-600 px-2"
                        placeholder="Type"
                      /></p>
                    
                    </div>
                  </div> 
                  :
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="mb-1"><b>Rating:</b> {bike.rating}</p>
                      <p className="mb-1"><b>Price:</b> ${bike.price}</p>
                    </div>
                    <div>
                      <p className="mb-1"><b>Stock:</b> {bike.quantity}</p>
                      <p className="mb-1"><b>Type:</b> {bike.type}</p>
                    </div>
                  </div>  
                }
              </>
          </div>
        ))}
      </div>
    </div>
    </RootLayout>
  );
}