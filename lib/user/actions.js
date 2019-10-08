export const actionTypes = {
  USER_SIGNIN: 'USER_SIGNIN',
  USER_SIGNOUT: 'USER_SIGNOUT'
}

export function userSignIn () {
  return { type: actionTypes.USER_SIGNIN }
}

export function userSignOut () {
  return { type: actionTypes.USER_SIGNOUT }
}
