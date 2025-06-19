import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { selectTotalItems } from '../../store/selectors/cart.selector';
import { add } from '../../store/actions/cart.actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private service = inject(ProductService);
  private store = inject(Store)

  products = toSignal(this.service.get().pipe(
    catchError(() => {
      return of([])
    })
  ), {
    initialValue: [] as Product[]
  });

  countProducts = toSignal(this.store.select(selectTotalItems), {
    initialValue: 0
  })

  addToCart(product: Product) {
    this.store.dispatch(add({product}));
  }
}
