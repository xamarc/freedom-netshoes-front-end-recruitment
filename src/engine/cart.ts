import { computedFrom } from 'aurelia-framework';
import { CartItem } from './cartItem';
import { Product } from '../domain/product';

export class Cart {
    
    itens: CartItem[] = [];
    totalCart: number;
    totalCartItens: number;

    constructor(){
        let storageItens = localStorage.getItem('itens');
        if(storageItens) 
            this.itens = JSON.parse(storageItens);
        else
            this.itens = [];
    }

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
                qtd: 1,
                totalValue: product.price
            }
            this.itens.push(newCartItem);
        }

        this.calcTotalCart();
        localStorage.setItem("itens",JSON.stringify(this.itens));
    }

    removeItem(product: Product): void {        
        let indexItem = this.itens.findIndex(x => x.product.id === product.id);

        this.itens.splice(indexItem, 1);
        this.calcTotalCart();
        localStorage.setItem("itens",JSON.stringify(this.itens));
    }

    decrementItem(product: Product): void{
        let item = this.itens.find(x => x.product.id === product.id);
        if(!item)
            return
        if(item.qtd === 1)
            return

            item.qtd -= 1;
            this.calcTotalCart();
            localStorage.setItem("itens",JSON.stringify(this.itens));
    }

    calcTotalCart(): void{
        let total = 0;
        let totalItens = 0;

        for(let item of this.itens){            
            total += item.qtd * item.product.price;
            totalItens += item.qtd;
            item.totalValue = parseFloat((item.qtd * item.product.price).toFixed(2));
        }
        this.totalCart = parseFloat(total.toFixed(2));
        this.totalCartItens = totalItens;
    }
}