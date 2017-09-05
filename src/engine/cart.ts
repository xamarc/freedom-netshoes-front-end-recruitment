import { computedFrom } from 'aurelia-framework';
import { CartItem } from './cartItem';
import { Product } from '../domain/product';

export class Cart {
    
    itens: CartItem[] = [];
    totalCart: number;

    addItem(product: Product): void {

        let cartItem = this.itens.find(x => x.product.id === product.id);

        // Product already in the bag. Increment quantity
        if (cartItem) {
            cartItem.qtd += 1;
            this.calcTotalCart();
        }

        // Novo produto no carrinho.
        else {
            let newCartItem: CartItem = {
                product: product,
                qtd: 1
            }
            this.itens.push(newCartItem);
        }

        this.calcTotalCart();
    }

    removeItem(product: Product): void {
        
        this.calcTotalCart();
        let indexItem = this.itens.findIndex(x => x.product.id === product.id);

        this.itens.splice(indexItem, 1);
        this.calcTotalCart();
    }

    calcTotalCart(): void{
        let total = 0;

        for(let item of this.itens){            
            total += item.qtd * item.product.price;
        }
        this.totalCart = parseFloat(total.toFixed(2));
    }
}