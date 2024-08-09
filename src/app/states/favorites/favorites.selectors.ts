import { createSelector } from '@ngrx/store';
import { State } from './favorites.reducer'

export const selectFavorites = (state: State) => state;

export const selectFavoriteById = (id: string) => createSelector(
  selectFavorites,
  (state) => state[id]
);
