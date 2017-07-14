import * as types from '../actions/actionTypes';

import initialState from './initialState';

export default function isMobileMenu(state = initialState.isMobileMenu, action) {
  switch (action.type) {
    case types.SET_MOBILE:
      return action.value;

    default:
      return state;
  }
}
