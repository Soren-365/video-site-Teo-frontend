import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const changeAuth(isLoggedIn) {
    return {
        type: UserActionTypes.CHANGE_AUTH,
        payload: isLoggedIn
    }

}
