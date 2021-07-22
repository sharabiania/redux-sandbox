import * as actions from './actions.js';

let lastId = 0;
export default function reducer(state = [], action) {
  switch(action.type) {
    case actions.ADD_BUG:
      return [...state, {id: ++lastId, ...action.payload, resolved: false}];
    case actions.REMOVE_BUG:
      return state.filter(x => x.id !== action.payload.id);
    default:
      return state;
  }
}