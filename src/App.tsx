import React from 'react';
import { ScrollArea } from './components/ui/scroll-area';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/Product/ProductList';
import ProductDetail from './components/Product/ProductDetail';
import ProductEdit from './components/Product/ProductEdit';
import NoPage from './components/NoPage';
import ProductCreate from './components/Product/ProductCreate';
import ProductStatus from './components/Product/ProductStatus';
import ProductDelete from './components/Product/ProductDelete';
import Navbar from './components/Navbar';
import SidebarTriggerButton from './components/Sidebar/SidebarTriggerButton';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';

function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/product/edit" element={<ProductEdit />} />
          <Route path="/product/delete" element={<ProductDelete />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/product/status" element={<ProductStatus />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
