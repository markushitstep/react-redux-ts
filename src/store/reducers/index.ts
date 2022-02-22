import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    users: userReducer,
    todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>

