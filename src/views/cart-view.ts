import { autoinject } from 'aurelia-framework';
import { ProductsRepository } from '../repositories/products-repository';
import { Product } from '../domain/product';
import { Cart } from '../engine/cart';
import * as $ from 'jquery';

@autoinject
export class CartView{
    products: Product[];

    constructor(private repository: ProductsRepository, private cart: Cart){

    }

    onRemoveProducts(product:Product){
        this.cart.removeItem(product)
    }

    addItemCart(cartItem){
        this.cart.addItem(cartItem.product);
    }

    removeItemCart(cartItem){
        this.cart.decrementItem(cartItem.product);
    }
}