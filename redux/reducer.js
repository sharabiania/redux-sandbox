import * as actions from './actions.js';

let lastId = 0;

export default function reducer(state = [], action) {

  // should update state in an immutable way:
  // not directly changing the state.
  // make a copy of the state, make changes, to the copy, return the copy.
  // Pure Function ^

  switch(action.type) {
    case actions.ADD_BUG:
      return [...state, {id: ++lastId, ...action.payload, resolved: false}];
    case actions.REMOVE_BUG:
      return state.filter(x => x.id !== action.payload.id);
    case actions.RESOLVE_BUG:
      return state.map(x => x.id !== action.payload.id ? x : {...x, resolved: true});    
    default:
      return state;
  }
}