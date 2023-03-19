import { account, login } from '../reducers/index';
import { actionInt } from '../interfaces/index';
export const accountAct = (data: any): actionInt => {
  return {
    type: account,
    data,
  }
}

export const loginAct = (data: boolean): actionInt => {
  return {
    type: login,
    data,
  }
}
