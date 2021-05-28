import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
      addContactSuccess,
      deleteContactSuccess,
      filterContact,
      fetchContactSuccess,
} from './actions';


const contactBoock = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];



const items = createReducer(contactBoock, {
    [fetchContactSuccess]: ( _ , {payload}) => payload,
    [addContactSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactSuccess]:(state, {payload}) => 
    state.filter(({id}) => id !== payload ),
});


const filter = createReducer('', {
    [filterContact]:( _ , {payload} ) => payload,
    //поставила подчеркивание вместо state
});

export default combineReducers({
    items,
    filter,
});