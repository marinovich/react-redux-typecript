const initialState = 0;

function counter(state = initialState, { type }) {
  switch (type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default counter;
