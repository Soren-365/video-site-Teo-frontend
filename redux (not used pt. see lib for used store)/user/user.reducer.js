import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    userAuth: false
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.Change_AUTH:
            return {
                ...state,
                userAuth: action.payload
            }
        default:
            return state;
    }

}

export default userReducer

