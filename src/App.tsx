import React from 'react';
import { ScrollArea } from './components/ui/scroll-area';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import NoPage from './components/NoPage';
import ProductCreate from './components/ProductCreate';
import ProductStatus from './components/ProductStatus';
import ProductDelete from './components/ProductDelete';
import Navbar from './components/Navbar';
import SidebarTriggerButton from './components/SidebarTriggerButton';

function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
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
