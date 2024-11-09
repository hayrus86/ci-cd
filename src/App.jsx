import React, { useState } from 'react';
import { sum } from './helpers/sum/sum';
import { minus } from './helpers/minus/minus';

function App() {
  const [state, setState] = useState(20);

  const getRandom = (min, max) => {
    const min1 = Math.ceil(min);
    const max2 = Math.floor(max);
    return Math.floor(Math.random() * (max2 - min1 + 1)) + min;
  };

  const increment = () => setState((prev) => sum(prev, getRandom(1, 5)));
  const decrement = () => setState((prev) => minus(prev, getRandom(1, 5)));
  const getColor = () => (state >= 0 ? 'blue' : 'red');
  const getFont = () => (state > 20 ? state : 20);

  return (
    <div className="App">
      <button
        type="button"
        style={{ background: 'black', color: 'white', padding: 15 }}
        onClick={increment}
      >
        increment
      </button>

      <button
        type="button"
        style={{ background: 'black', color: 'red', padding: 15 }}
        onClick={decrement}
      >
        decrement
      </button>

      <h1 style={{ fontSize: getFont(), color: getColor() }}>
        value =
        {state}
      </h1>

    </div>
  );
}

export default App;
