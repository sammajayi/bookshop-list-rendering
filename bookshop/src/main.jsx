import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog.jsx';
import Books from './pages/Books.jsx';
import Audiobooks from './pages/Audiobooks.jsx';
import Stationery from './pages/Stationery.jsx';
import Login from './pages/Login.jsx';
import Cart from './components/Cart.jsx';
import App from './App.jsx';
import './index.css';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Audiobooks" element={<Audiobooks />} />
        <Route path="/Stationery" element={<Stationery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

