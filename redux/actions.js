export const ADD_BUG = "bugAdded";
export const REMOVE_BUG = "bugRemoved";
export const RESOLVE_BUG = "bugResolved";


// The following functions are called Action Creators.

export function addBug(description) {
  return {
    type: ADD_BUG,
    payload: {
      description: description
    }
  };
}

export function removeBug(id) {
  return {
    type: REMOVE_BUG,
    payload: {
      id: id
    }
  };
}

export function resolveBug(id) {
  return {
    type: RESOLVE_BUG,
    payload: {
      id: id
    }
  };
}