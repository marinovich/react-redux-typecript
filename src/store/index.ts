import { createStore } from 'redux';

import counter from '../containers/App/reducers';

const store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

export default store;
