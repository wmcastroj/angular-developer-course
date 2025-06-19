import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, timeout } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  number: string;
  description: string;
  amount: number;
  urlImage: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseURL: string = 'http://localhost:8083/item';

  private http: HttpClient = inject(HttpClient);

  get(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseURL)
      .pipe(
        timeout(3000),
        catchError(() => {
          throw new Error('error items')
        })
      )
  }

}
