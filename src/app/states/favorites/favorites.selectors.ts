import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './favorites.reducer'

export const  selectFavoritesState = createFeatureSelector<State>('favorites');

export const selectFavoriteById = (id: string) => createSelector(
  selectFavoritesState,
  (state) => state[id]
);
