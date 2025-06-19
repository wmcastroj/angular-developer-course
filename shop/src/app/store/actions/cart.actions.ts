import { createAction, props } from "@ngrx/store";
import { Product } from "../../services/product.service";

export const add = createAction(
    '[cart] Add To Cart',
    props<{product: Product}>()
)

export const remove = createAction(
    '[cart] Remove From Cart',
    props<{idProduct: number}>()
)

export const clear = createAction(
    '[cart] Clear Cart',
)