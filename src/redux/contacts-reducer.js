import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContact,
  removeContact,
  changeFilter,
  existContact,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [removeContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
  [existContact]: (state, _) => state,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_state, { payload }) => payload.filter,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
