import { autoinject } from 'aurelia-framework';
import { ProductsRepository } from '../repositories/products-repository';
import { Product } from '../domain/product';
import { Cart } from '../engine/cart';
import * as $ from 'jquery';

@autoinject
export class ProductListview{
    products: Product[];

    constructor(private repository: ProductsRepository, private cart: Cart){

    }

    onAddProducts(product:Product){
        this.cart.addItem(product)
        $(".cd-cart-container").removeClass("empty");
    }
    
    attached() {
        this.load();
        $(".cd-cart-trigger").on("click", function(event){
            $(".cd-cart-container").toggleClass("cart-open");
        });
    }

    load() {
        this.repository.getAll()
          .then(products => {
              if (!products || !Array.isArray(products)) {
                  this.drawList([]);
                  return;
              }
    
              this.products = products;
    
              this.drawList(this.products);
          })
          .catch(() => {
              //this.notificationService.danger('Error loading products', { containerSelector: '#notification-host-container' });
          });
      }

      drawList(products: Product[]) {
        let items: Product[] = JSON.parse(JSON.stringify(products));
      }
}