import { combineReducers } from '@reduxjs/toolkit';
import { ActionTypes } from '../actions'

const initialState = {
    foods: [
        {
            name: "TukTuk", 
            location: "ECSC 116", 
            servings: "20", 
            tags: "vegetarian"
        }, 
            {
                name: "Han Fusion", 
                location: "Collis 101",
                servings: "5", 
                tags: "none"
            }]
}

const rootReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ActionTypes.ADDDATA:
            // console.log(action.type)
            return {...state, foods: [...state.foods, action.payload]};
        
        case ActionTypes.ActionTypes:
            return {...state, foods: [action.payload]}

        default:
            return state;
    }
}

export default rootReducer;