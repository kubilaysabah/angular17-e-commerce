
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from "rxjs";

import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';


import { Product } from '@domain/product';
import ProductService from '@services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    SkeletonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  layout: 'list' | 'grid' = 'list';
  products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) {
  }

  counterArray(n: number): any[] {
    return Array(n);
  }

  price(price: number): string {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(price);
  }

  ngOnInit(): void {
    this.productService.list()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (error) => {
          console.log(error);
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
