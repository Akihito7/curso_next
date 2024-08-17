'use client';

import { addProduct } from '@/app/server-actions/productsActions';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

export function AddProductForm() {
  const [state, formAction] = useFormState(addProduct, {
    errors :[]
  })

  return (

    <form action={formAction}>
      <div className="containerInput">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name='name'
        />
      </div>
      <div className="containerInput">
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name='price'

        />
      </div>

      <div className="containerInput">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name='description'

        />
      </div>

      <div className="containerInput">
        <label htmlFor="stock">Stock</label>
        <input
          type="text"
          id="stock"
          name='stock'

        />
      </div>

      <div className="containerInput">
        <label htmlFor="isAvailable">Available</label>
        <input
          type="checkbox"
          id="isAvailable"
          name="isAvailable"
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
