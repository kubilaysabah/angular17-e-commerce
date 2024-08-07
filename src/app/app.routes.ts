import { Routes } from '@angular/router';
import { ProductsComponent } from '@modules/products/products.component'
import { ProductComponent } from '@modules/product/product.component'

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':slug-p-:id',
    component: ProductComponent,
  }
];
