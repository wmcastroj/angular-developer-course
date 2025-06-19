import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { selectAllProducts, selectTotalAmount, selectTotalItems } from '../../store/selectors/cart.selector';
import { CartProduct } from '../../store/cart.state';
import { clear, remove } from '../../store/actions/cart.actions';

@Component({
  selector: 'app-shoppingcart',
  imports: [],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent {
  private store = inject(Store);

  products = toSignal(this.store.select(selectAllProducts), {
    initialValue: [] as CartProduct[]
  })

  total = toSignal(this.store.select(selectTotalAmount), {
    initialValue: 0
  })

  deleteItem(idProduct: number) {
    this.store.dispatch(remove({idProduct}))
  }

  clearCart() {
    this.store.dispatch(clear())
  }

}
