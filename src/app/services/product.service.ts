import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Observable, first } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).pipe(
      // Map the JSON data from Spring Data REST to Product array
      map((response) => response)
    );
  }
}

// TODO
// interface GetResponse {
//   _embedded: {
//     products: Product[];
//   };
// }
