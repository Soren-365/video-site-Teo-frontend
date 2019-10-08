import { actionTypes } from './actions'

export const initialState = {
  userSignedIn: false,

}
function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_SIGNIN:
      return {
        ...state,
        ...{ userSignedIn: true }
      }

    case actionTypes.USERSIGNOUT:
      return {
        ...state,
        ...{ userSignedIn: false }
      }

    default:
      return state
  }
}

export default reducer
