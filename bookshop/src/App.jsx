import React from 'react';
import './App.css'

const books = [
  {
    id: 1,
    title: 'The Lost Kingdom',
    author: 'John Doe',
    coverImage: 'https://via.placeholder.com/150',
    reviews: '4.5/5',
    description: 'An epic tale of adventure in a forgotten land.',
    price: '$20.00',
    discountedPrice: '$15.00',
  },
  {
    id: 2,
    title: 'Whispers of the Wind',
    author: 'Jane Smith',
    coverImage: 'https://via.placeholder.com/150',
    reviews: '4.0/5',
    description: 'A journey of self-discovery and the power of nature.',
    price: '$18.00',
    discountedPrice: '$13.50',
  },
  {
    id: 3,
    title: 'The Mystic Path',
    author: 'Sarah Johnson',
    coverImage: 'https://via.placeholder.com/150',
    reviews: '4.7/5',
    description: 'Follow the protagonist as they explore mystical realms.',
    price: '$22.00',
    discountedPrice: '$17.00',
  },
  {
    id: 4,
    title: 'Echoes of Eternity',
    author: 'Michael Brown',
    coverImage: 'https://via.placeholder.com/150',
    reviews: '4.2/5',
    description: 'A sci-fi thriller that will keep you on the edge of your seat.',
    price: '$25.00',
    discountedPrice: '$20.00',
  },
  {
    id: 5,
    title: 'Shadows of the Past',
    author: 'Emily Davis',
    coverImage: 'https://via.placeholder.com/150',
    reviews: '4.8/5',
    description: 'A gripping mystery about uncovering secrets from the past.',
    price: '$19.00',
    discountedPrice: '$14.50',
  },
  {
    id: 6,
    title: 'Bridges of Time',
    author: 'David Wilson',
    coverImage: 'https://via.placeholder.com/150',
    reviews: '4.3/5',
    description: 'A historical fiction novel that spans across centuries.',
    price: '$21.00',
    discountedPrice: '$16.50',
  },
];

function App() {
  return (
    <>
    <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
     {books.map((book) => (
        <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', width: '400px', display: 'flex', gap: '10px' }}>
          <img src={book.coverImage} alt={book.title} style={{width: '200px'}} />
          <div>
          <h2>{book.title}</h2>
          <p style={{fontWeight: 'bold'}}>{book.author}</p>
          <p>{book.reviews}</p>
          <p>{book.description}</p>
          <div style={{display: 'flex',justifyContent: 'center', gap: '5px', fontWeight: 'bold'}}>
          <p style={{ textDecoration: 'line-through'}}>{book.price}</p>
          <p>{book.discountedPrice}</p>
          </div>
          <button style={{ backgroundColor: 'white', color: '#4C3DB2', padding: '10px', border: '1px solid #4C3DB2', cursor: 'pointer' }}>
            Buy Now
          </button>
        </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default App
