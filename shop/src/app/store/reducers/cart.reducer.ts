import { createReducer, on } from "@ngrx/store";
import { initialCartState } from "../cart.state";

import * as actions from '../actions/cart.actions'

export const cartFeatureKey = 'cart';

export const reducer = createReducer(
    initialCartState,
    
    on(actions.add, (state, { product }) => {
        const search = state.products.find(t => t.product.id === product.id);

        if (search) {
            return {
                ...state,
                products: state.products.map(
                    t => t.product.id === product.id ?  {...t , quantity: t.quantity + 1} : t
                )
            };
        }

        return {
            ...state,
            products: [
                ...state.products,
                {
                    product,
                    quantity: 1
                }
            ]
        }
    }),

    on(actions.remove, (state, { idProduct }) => {
        return {
            ...state,
            products: state.products.filter(t => t.product.id !== idProduct)
        }
    }),

    on(actions.clear, (state) => {
        return {
            ...state,
            products: []
        }
    }),
)