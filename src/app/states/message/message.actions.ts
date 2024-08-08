import { createReducer, on, createAction, props } from '@ngrx/store';

interface Message {
  title: string;
  description: string;
  type: string;
}

const initialState: Message | null = null;

export const addMessage = createAction(
  '[Message] Add Message',
  props<{ message: Message }>()
);

export const messageReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => message)
);
