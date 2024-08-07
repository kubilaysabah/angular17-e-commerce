import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

import { Product } from "@domain/product";

@Injectable()
export default class ProductService {
  constructor(
    private http: HttpClient
  ) {
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json')
  }
}
