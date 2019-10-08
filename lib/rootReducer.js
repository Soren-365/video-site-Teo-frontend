import { combineReducers } from 'redux'

import clock from './clock/reducers'
import count from './count/reducers'
import placeholder from './placeholder/reducers'
import user from './user/reducers'

export default combineReducers({
  clock,
  count,
  placeholder,
  user
})
