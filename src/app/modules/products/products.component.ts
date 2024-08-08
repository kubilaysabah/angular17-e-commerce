// angular
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

// prime ng
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { DropdownModule } from 'primeng/dropdown';

// libraries
import slugify from "slugify";

// other
import Product from '@domain/product';
import ProductService from '@services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DataViewModule,
    ButtonModule,
    TagModule,
    SkeletonModule,
    DropdownModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

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

  slug(name: string, id: string): string {
    const slug = slugify(name, {
      trim: true,
      lower: true,
      locale: 'tr',
      strict: true,
      replacement: '-'
    })

    return `${slug}-p-${id}`;
  }

  getProducts(): void {
    this.productService.list()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (products) => {
          this.products = products;
          // this.appSubject.message = { type: 'success', title: 'Başarılı!', description: 'Ürünler listeleniyor...' }
        },
        error: (error) => {
          // this.appSubject.message = { type: 'error', title: 'Hata!', description: 'hata' }
        }
      })
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
