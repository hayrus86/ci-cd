import React, { useState } from 'react';
import { sum } from './helpers/sum/sum';
import { minus } from './helpers/minus/minus';

function App() {
  const [state, setState] = useState(20);

  const increment = () => setState((prev) => sum(prev, 1));
  const decrement = () => setState((prev) => minus(prev, 1));
  const getColor = () => (state >= 0 ? 'blue' : 'red');
  const getFont = () => (state > 20 ? state : 20);

  return (
    <div className="App">
      <h1 style={{ fontSize: getFont(), color: getColor() }}>
        value =
        {state}
      </h1>
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

    </div>
  );
}

export default App;
