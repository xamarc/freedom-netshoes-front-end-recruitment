import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Product } from '../domain/product';
import { NetshoesSettings } from '../settings';

@autoinject
export class ProductsRepository {

    constructor(private httpClient: HttpClient) {
        this.httpClient.configure(config => config.withBaseUrl(NetshoesSettings.apiBaseAddress));
    }

    getAll(): Promise<Product[]> {
        return this.httpClient.fetch('products.json')
            .then(response => response.json())
            .then((data: any) => {
                if(!data || !data.products || !Array.isArray(data.products)){
                    return null;
                }
                return data.products as Product[];
            });
    }

    get(id: Number): Promise<Product> {
        return this.getAll().then(products => products .find(x => x.id === id));
    }
}