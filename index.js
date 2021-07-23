import store from './redux/store.js';
import {addBug, removeBug, resolveBug} from './redux/actions.js';

console.log(' = = = redux sandbox = = = ');

// we can do all the UI updates here.
// this will run everytime store dispatch is called.
const unsubscribe = store.subscribe((x) => {
  console.debug('state: ', store.getState());
});

store.dispatch({type: 'does not exist'}); // subscribe will call anyways.
store.dispatch({type: 'does not exist'});

store.dispatch(addBug('first bug'));
store.dispatch(addBug('second bug'));
store.dispatch(addBug('delete this bug'));
store.dispatch(removeBug(3));
store.dispatch(resolveBug(2));

// unsubscribe, in case in other pages, maybe 
// we don't have the same UI elements.
unsubscribe();