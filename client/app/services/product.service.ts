import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable }    from 'rxjs';

import 'rxjs/add/operator/map';

import { Product }       from '../types/Product';

@Injectable()
export class ProductService {
    private url = '/api/product/'
    
    constructor(private http:Http) {
        console.log('Product Service Initialized');
    }
    
    getProduct(): Observable<Product[]> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    addProduct(newProduct: Product): Observable<Product> {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.url, JSON.stringify(newProduct), {headers: headers})
            .map(res => res.json());
    }

    deleteProduct(id: number): Observable<Product[]> {
        return this.http.delete(this.url + id)
            .map(res => res.json());
    }

    updateStatus(product: Product) {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        return this.http.put(this.url + product.id, JSON.stringify(product), {headers: headers})
            .map(res => res.json());
    }
}