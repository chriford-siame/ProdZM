import { useState, useEffect } from "react";
import axios from "axios";
import IProduct, { ISearchParams } from "@/interfaces/products";

const FindProducts = (qs: ISearchParams) => {
  const [productsQS, setProductsQS] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [QSerror, setQSError] = useState<string | null>(null);

  useEffect(() => {
    const productQuerySet = async () => {
      try {
        const response = await axios.get<IProduct[]>(`http://localhost:8000/products/search/?qs=${qs.qs}`);
        setProductsQS(response.data);
      } catch (err) {
        setQSError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    productQuerySet();
  }, [qs]);

  return { productsQS, loading, QSerror };
};

export default FindProducts;
