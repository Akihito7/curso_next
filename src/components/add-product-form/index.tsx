'use client';

import { addProduct } from '@/app/server-actions/productsActions';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [state, formAction] = useFormState(addProduct, {
    errors :[]
  })

  console.log(state)

  return (

    <form action={formAction}>
      <div className="containerInput">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="containerInput">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name='price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="stock">Stock</label>
        <input
          type="text"
          id="stock"
          name='stock'
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>

      <div className="containerInput">
        <label htmlFor="isAvailable">Available</label>
        <input
          type="checkbox"
          id="isAvailable"
          name="isAvailable"
          checked={isAvailable}
          onChange={() => setIsAvailable(prev => !prev)}
        />
      </div>
      {
        state.errors.length > 0 && state.errors.map((e, i) => (
          <p
            key={i}
            style={{
              color : "red"
            }}
          >
            {e}
          </p>
        ))
      }
      <Button />
    </form>
  );
}

function Button() {

  const status = useFormStatus();
  return (
    <button disabled={status.pending}>
      Add
    </button>
  )
}
