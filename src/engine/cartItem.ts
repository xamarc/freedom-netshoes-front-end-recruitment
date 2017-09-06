import { Product } from '../domain/product';

export class CartItem {
    product: Product;
    qtd: number;
    totalValue: number;
}