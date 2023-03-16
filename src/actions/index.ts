import { account } from '../reducers/index';
import { actionInt } from '../interfaces/index';
export const accountAct = (data: any): actionInt => {
  return {
    type: account,
    data,
  }
}