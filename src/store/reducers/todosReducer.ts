import { TodoAction, TodoActionTypes, TodoState } from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    isLoading: false,
    error: null,
    limit: 10,
    page: 1
}

export const todosReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {
                ...state, isLoading: true 
            }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {
                ...state, isLoading: false, error: action.payload,
            }
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state, isLoading: false, todos: action.payload 
            }
        case TodoActionTypes.SET_TODOS_PAGE:
            return {
                ...state, page: action.payload 
            }
        default:
            return state;
    }
}