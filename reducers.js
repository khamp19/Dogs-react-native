//import your actions
import { GETTING_DATA, SUCCESS, ERROR } from './actions';

const defaultState = { getting_data: false, error: '', dogs: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case GETTING_DATA:
      return Object.assign({}, state, {getting_data: true});
    case ERROR:
      return Object.assign({}, state, {getting_data: false, error: action.error});
    case SUCCESS:
      return Object.assign({}, state, {getting_data: false, dogs: state.dogs.concat(action.dogs)});
    default:
      return state;
  }
}