
export const account = 'ACCOUNT';
export const login = 'LOGIN';
import { actionInt } from '../interfaces/index';

const stateIndex = {
  account: {},
  isLogin: false,
}

const indexReducers = (state = stateIndex, action: actionInt) => {
  switch (action.type) {
    case account:
      return { ...state, account: action.data }
      break;
    case login:
      return { ...state, isLogin: action.data }
      break;
    default:
      return state;
      break;
  }
}

export default indexReducers;