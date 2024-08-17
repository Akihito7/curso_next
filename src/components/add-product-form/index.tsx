'use client';

import { addProduct, revalidatePathActions } from '@/app/server-actions/productsActions';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const router = useRouter()


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(!name || !price || !description || !stock) return alert("preencha todos os campos porfavor")
    const imported = isAvailable ? 1 : 0

    await addProduct({
      name,
      price,
      description,
      stock,
      isAvailable : imported
    })

  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="containerInput">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="containerInput">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="stock">Stock</label>
        <input
          type="text"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="isAvailable">Available</label>
        <input
          type="checkbox"
          id="isAvailable"
          checked={isAvailable}
          onChange={() => setIsAvailable(prev => !prev)}
        />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
