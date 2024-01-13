import React from 'react';
import { ScrollArea } from './components/ui/scroll-area';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/Product/List';
import ProductDetail from './components/Product/Detail';
import ProductEdit from './components/Product/Edit';
import NoPage from './components/NoPage';
import ProductCreate from './components/Product/Create';
import ProductStatus from './components/Product/ProductStatus';
import ProductDelete from './components/Product/ProductDelete';
import Navbar from './components/Navbar/Navbar';
import SidebarTriggerButton from './components/Sidebar/SidebarTriggerButton';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ProductCart from './components/Product/Cart';

function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id/detail" element={<ProductDetail />} />
          <Route path="/product/edit" element={<ProductEdit />} />
          <Route path="/product/cart" element={<ProductCart />} />
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
