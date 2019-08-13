import * as types from './actionTypes';

export function setMobileMenu (value) {
  return {
    type: types.SET_MOBILE,
    value
  };
}
