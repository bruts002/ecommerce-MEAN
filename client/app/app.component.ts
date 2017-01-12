import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ProductService]
})
export class AppComponent { }
