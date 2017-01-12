import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../types/Product';

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products.component.html'
})

export class ProductComponent implements OnInit {
  
  newProduct: Product;
  
  private products: Product[];
  // private productService: ProductService;
  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getProduct()
      .subscribe(products => this.products = products);
  }

  addProduct(event): void {
    event.preventDefault();

    this.productService.addProduct(this.newProduct)
      .subscribe(product => {
        this.products.push(product);
        this.newProduct = new Product;
      });
  }

  deleteProduct(id: number) {
    // var products = this.products;

    // this.productService.deleteProduct(id).subscribe(data => {
    //   if (data.n == 1) {
    //     for (let i = 0; i < products.length; i++) {
    //       if (products[i].id == id) {
    //         products.splice(i, 1);
    //       }
    //     }
    //   }
    // })
  }

  updateStatus(product: Product) {
    this.productService.updateStatus(this.newProduct)
      .subscribe(data => {
        /** TODO: Remove loading icon */
      })
  }
  
}
