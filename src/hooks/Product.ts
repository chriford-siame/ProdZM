import { useState, useEffect } from "react";
import axios from "axios";
import IProduct from "@/interfaces/products";

const useProduct = (id: string | number) => {
    const [product, setProduct] = useState<IProduct>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get<IProduct>(`http://localhost:8000/products/${id}/`);
          setProduct(response.data);
        } catch (err) {
          setError("Failed to fetch product");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    return { product, loading, error };
  };
  
export default useProduct;