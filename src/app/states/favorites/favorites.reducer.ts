import { createReducer, on, } from '@ngrx/store';
import * as FavoritesActions from './favorites.actions';
import Product from '@domain/product'

export interface State {
  [id: string]: Product;
}

export const initialState: State = {}

export const favoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.addFavorite, (state, { id, data }) => {
    return {
      ...state,
      [id]: data
    }
  }),
  on(FavoritesActions.removeFavorite, (state, { id }) => {
    const obj = { ...state };
    delete obj[id]
    return obj;
  })
)
