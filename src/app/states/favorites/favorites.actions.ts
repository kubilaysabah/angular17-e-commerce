import { createAction, props } from '@ngrx/store';
import Product from '@domain/product'

export enum FAVORITES_ACTIONS {
  ADD = '[Favorites] Add Favorite',
  UPDATE = '[Favorites] Update Favorite',
  REMOVE = '[Favorites] Remove Favorite',
};

export const addFavorite = createAction(
  FAVORITES_ACTIONS.ADD,
  props<{ id: string; data: Product }>()
)

export const updateFavorite = createAction(
  FAVORITES_ACTIONS.UPDATE,
  props<{ id: string; data: Product; }>()
)

export const removeFavorite = createAction(
  FAVORITES_ACTIONS.REMOVE,
  props<{ id: string }>()
)
