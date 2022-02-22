import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from '../store/actionCreator/'

export const useActions = () => {
    const dispatch = useDispatch()
    console.log(ActionCreators);
    return bindActionCreators(ActionCreators, dispatch);
}