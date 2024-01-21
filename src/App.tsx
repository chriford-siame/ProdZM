import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from './components/ui/toaster';
import CustomLoarder from './components/Loaders/Loarder';

const ProductList = React.lazy(() => import('./components/Product/List'));
const ProductEdit = React.lazy(() => import('./components/Product/Edit'));
const ProductCreate = React.lazy(() => import('./components/Product/Create'));
const ProductStatus = React.lazy(() => import('./components/Product/ProductStatus'));
const ProductDelete = React.lazy(() => import('./components/Product/ProductDelete'));
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Signup = React.lazy(() => import('./components/Auth/Signup'));
const Login = React.lazy(() => import('./components/Auth/Login'));
const ProductCart = React.lazy(() => import('./components/Product/Cart'));
const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'));
const ProductOrders = React.lazy(() => import('./components/Product/Order/Orders'));
const PageNotFound = React.lazy(() => import('./components/Pages/404'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const ProductHistory = React.lazy(() => import('./components/Product/History'));
const Support = React.lazy(() => import('./components/CustomerCare/Support'));

const ProductDetail = React.lazy(() => import('./components/Product/Detail'));

function App() {
  return (
    <>
      <Navbar />
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductList />
            </React.Suspense>
          } />
          <Route path="/product/:id/detail" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductDetail />
            </React.Suspense>
          } />
          <Route path="/login" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <Login />
            </React.Suspense>
          } />
          <Route path="/signup" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <Signup />
            </React.Suspense>
          } />
          <Route path="/product/history" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductHistory />
            </React.Suspense>
          } />
          <Route path="/product/orders" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductOrders />
            </React.Suspense>
          } />
          <Route path="/account/settings" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <Settings />
            </React.Suspense>
          } />
          <Route path="/dashboard" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <Dashboard />
            </React.Suspense>
          } />
          <Route path="/product/edit" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductEdit />
            </React.Suspense>
          } />
          <Route path="/product/cart" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductCart />
            </React.Suspense>
          } />
          <Route path="/product/delete" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductDelete />
            </React.Suspense>
          } />
          <Route path="/product/create" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductCreate />
            </React.Suspense>
          } />
          <Route path="/product/status" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <ProductStatus />
            </React.Suspense>
          } />
          <Route path="/support" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <Support />
            </React.Suspense>
          } />
          <Route path="*" element={
            <React.Suspense fallback={
              <CustomLoarder />
            }>
              <PageNotFound />
            </React.Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
