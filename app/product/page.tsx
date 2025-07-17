'use client';

import Link from 'next/link';
import Card from '../components/cards';
import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
}

export default function ProductList() {
const [products, setProducts] = useState([]);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [editId, setEditId] = useState(null);
const [editName, setEditName] = useState('');
const [editPrice, setEditPrice] = useState('');

  const fetchProducts = async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    console.log('Fetched products:', data);
    setProducts(data);    
    }

    useEffect(() => {

      fetchProducts();
    }, [])
const handleAddProducts = async () => {
  const res = await fetch('api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, price }),
  })

  fetchProducts();
  setName('');
  setPrice('');
}

useEffect(() => {
  fetchProducts();
}, []);

const handleUpdateProducts = async (id: string) => {
  const res = await fetch(`/api/products`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, name: editName, price: editPrice }),
  });

  setEditId("");
  setEditName('');
  setEditPrice('');
  fetchProducts();
}

useEffect(() => {
  fetchProducts();
}, []);

const handleDeleteProducts = async (id: string) => {
  const res = await fetch("/api/products", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  })

  fetchProducts();
}

useEffect(() => {
  fetchProducts();
}, [])

  return (
    <main>
      <Card title='Product Page'>
        <div className="flex items-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}></div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className="text-lg font-semibold text-start" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
              List Product       
            </h1>
          </div>
        </div>
        <input
  type="text"
  placeholder="Masukkan nama produk..."
  className="mr-2"
  style={{
    color: 'black',
    width: '200px',
    marginLeft: '83px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
  }}
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="text"
  placeholder="Masukkan harga produk..."
  style={{
    color: 'black',
    width: '200px',
    marginLeft: '10px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
  }}
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>

          <button 
          className='bg-blue-500 text-white px-3 py-1 rounded' 
          style={{ marginLeft: '10px' }}
          onClick={handleAddProducts}
          >
            Add Products
          </button>
          
        <div className="flex items-center text-center">
          <div className="flex-shrink-0" style={{marginLeft: '50px'}}></div>
          <div className="ml-6" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
           <ul className="text-lg font-semibold text-center" style={{color: 'rgb(51, 52, 70)', marginLeft: '10px'}}>
  {products.map((product: Product) => (
    <li
      key={product.id}
      className="flex items-center justify-between"
      style={{
        height: '100px',
        border: '1px solid black',
        borderRadius: '4px',
        width: '546px',
        marginTop: '10px',
        padding: '0 16px',
      }}
    >
      <div>
        <div>{product.name}</div>
        <p>Rp. {product.price}.00</p>
      </div>
      <div className="flex items-center" style={{ gap: '10px' }}>
        {editId === product.id ? (
          <>
            <input
              className="mr-2"
              style={{
                color: 'black',
                width: '120px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: 'white',
              }}
              type='text'
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <input
            className="ml-2"
              type='number'
              style={{
                color: 'black',
                width: '100px',
                marginLeft: '10px',
                padding: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                backgroundColor: 'white',
              }}
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
            <button
              onClick={() => handleUpdateProducts(product.id)}
              className='bg-green-500 text-white px-3 py-1 rounded ml-2'
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => {
              setEditId(product.id);
              setEditName(product.name);
              setEditPrice(product.price);
            }}
            className='bg-yellow-500 text-white px-3 py-1 rounded'
          >
            Edit
          </button>
        )}
        {/* Tombol Delete di sebelah kanan Edit/Save */}
        <button
          onClick={() => handleDeleteProducts(product.id)}
          className='bg-red-500 text-white px-3 py-1 rounded ml-2'
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
          </div>
        </div>
        <button
          style={{
            padding: '8px 16px',
            width: '90px',
            color: 'grey',
            backgroundColor: 'blue',
            cursor: 'pointer',
            marginRight: 0,
            borderRadius: '4px',
            marginLeft: '25px',
            marginTop: '20px'
          }}
        >
          <Link href="/" className="text-lg text-start" style={{color: 'white'}}>Back</Link>
        </button>
      </Card>
    </main>
  );
}