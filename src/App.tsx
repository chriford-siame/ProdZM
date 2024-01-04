import React from 'react';
import PopOver from './components/PopOver';
import { ScrollArea } from './components/ui/scroll-area';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductEdit from './components/ProductEdit';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/detail" element={<ProductDetail />} />
        <Route path="/product/edit" element={<ProductEdit />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
