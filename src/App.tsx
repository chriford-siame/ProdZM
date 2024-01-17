import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/Product/List';
import ProductDetail from './components/Product/Detail';
import ProductEdit from './components/Product/Edit';
import ProductCreate from './components/Product/Create';
import ProductStatus from './components/Product/ProductStatus';
import ProductDelete from './components/Product/ProductDelete';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import ProductCart from './components/Product/Cart';
import { Toaster } from './components/ui/toaster';
import Dashboard from './components/Dashboard/Dashboard';
import ProductOrders from './components/Product/Order/Orders';
import PageNotFound from './components/Pages/404';
import Settings from './components/Settings/Settings';
import ProductHistory from './components/Product/History';
import Support from './components/CustomerCare/Support';

function App() {
  
  return (
    <>
      <Navbar />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/history" element={<ProductHistory />} />
          <Route path="/product/orders" element={<ProductOrders />} />
          <Route path="/account/settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/:id/detail" element={<ProductDetail />} />
          <Route path="/product/edit" element={<ProductEdit />} />
          <Route path="/product/cart" element={<ProductCart />} />
          <Route path="/product/delete" element={<ProductDelete />} />
          <Route path="/product/create" element={<ProductCreate />} />
          <Route path="/product/status" element={<ProductStatus />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
