export interface Product {
    _id: string;
    image?: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    isAvailable?: boolean;
}
