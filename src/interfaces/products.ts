interface IProductImage {
    id: number;
    image: string;
    is_main: boolean | undefined;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    remaining_stock: number;
    rating: number;
    category: number;
    orders: number;
    is_available: boolean;
    images: IProductImage[];
  }

export type {
    IProductImage,
};
export default IProduct;