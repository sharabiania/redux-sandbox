export const ADD_BUG = "bugAdded";
export const REMOVE_BUG = "bugRemoved";

export function addBug(description) {
  return {
    type: ADD_BUG,
    payload: {
      description: description
    }
  }
}

export function removeBug(id) {
  return {
    type: REMOVE_BUG,
    payload: {
      id: id
    }
  }
}