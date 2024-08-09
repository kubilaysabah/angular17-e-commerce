import { createAction, props } from '@ngrx/store';
import Product from '@domain/product'

export enum FAVORITES_ACTIONS {
  ADD = '[Favorites] Add Favorite',
  REMOVE = '[Favorites] Remove Favorite',
}

export const addFavorite = createAction(
  FAVORITES_ACTIONS.ADD,
  props<{ id: string; data: Product }>()
)

export const removeFavorite = createAction(
  FAVORITES_ACTIONS.REMOVE,
  props<{ id: string }>()
)
