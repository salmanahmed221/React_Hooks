'use client';

import { useReducer } from 'react';

const initialValue = 0;
const reducer = (count: any, action: any) => {
  if (action.type === 'increment') {
    return count = count + 1
  }
  if (action.type === 'decrement') {
    if (count == 0) {
      count == 0
    } else {
      return count = count - 1
    }
  }
  return count;
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      {count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default UseReducer;
