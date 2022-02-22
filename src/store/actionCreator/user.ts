import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS, 
                    payload: response.data 
                })
            },2000)
            
        } catch (error) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR, 
                payload: "User has some issues on load users"
            })
        }
    }
}