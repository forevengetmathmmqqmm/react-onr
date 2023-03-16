
export const account = 'ACCOUNT';
import { actionInt } from '../interfaces/index';

const stateIndex = {
  account: {},
}

const indexReducers = (state = stateIndex, action: actionInt) => {
  switch (action.type) {
    case account:
      return { ...state, account: action.data }
      break;
    default:
      return state;
      break;
  }
}

export default indexReducers;