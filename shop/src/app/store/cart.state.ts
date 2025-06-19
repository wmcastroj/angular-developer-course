import { Product } from "../services/product.service";

export interface CartProduct {
    product: Product;
    quantity: number;
}

export interface CartState {
    products: CartProduct[];
}

export const initialCartState: CartState = {
    products: []
};