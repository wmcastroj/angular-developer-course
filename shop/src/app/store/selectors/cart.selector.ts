import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../cart.state";
import { cartFeatureKey } from "../reducers/cart.reducer";

export const selectState = createFeatureSelector<CartState>(cartFeatureKey);

export const selectAllProducts = createSelector(
    selectState,
    state => state.products
)

export const selectTotalAmount = createSelector(
    selectAllProducts,
    products => products.reduce(
        (total, cartProduct) => 
        total + cartProduct.product.amount * cartProduct.quantity
    , 0) 
)

export const selectTotalItems = createSelector(
    selectAllProducts,
    products => products.reduce((counter, cartProduct) => counter + cartProduct.quantity, 0)
)