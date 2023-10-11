import { AUTH_ERROR, LOGIN, LOGOUT, REGISTER } from "../ActionsType/authActionsTypes"

const initialState = {
    isAuthentificated: false,
    user:{},
    errors:""
}

export const authReducer = (state =initialState, action) =>{

    switch( action.type) {
    case LOGIN :
        return{
            ...state,
            isAuthentificated: action.payload.isAuthentificated,
            user: action.payload.user,
            errors: action.payload.errors,
        };
        case REGISTER:
            return{...state, users:action.payload};
        case LOGOUT :
        return{};
        case AUTH_ERROR:
            return{...state, errors:action.payload.errors}
        default:
            return state;
    }

} 