import { createStore } from "redux";

function todoReducer(state, action){
    switch(action.type){
        case "ADD_todo":
            return [...state, action.payload];
        case "DELETE_todo":
            return state.filter(todo => todo.id!==action.payload);
        default:
            return state;
    }
}

// const response = createStore(todoReducer,[]);
// console.log(response.getState());
// console.log(response.dispatch());

const {dispatch, subscribe, getState, replaceReducer} = createStore(todoReducer,[]);

dispatch({type: 'add_todo', payload: {todoText:'todo 1'}});
console.log(getState);