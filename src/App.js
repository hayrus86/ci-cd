import { useState } from "react";
import { sum } from "./helpers/sum/sum";
import {minus} from "./helpers/minus/minus";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => sum(prev, 1));
    const decrement = () => setState(prev => minus(prev, 1));
    const get_color = () => {
        console.log(state);
        
        return state >= 0 ? 'blue' : 'red'
    }

    return (
        <div className="App">
            <h1 style={{ fontSize: 70, color: {get_color} }}>value = {state}</h1>
            <button
                style={{background: 'black', color: "white", padding: 15}}
                onClick={increment}
            >
                increment
            </button>

            <button
                style={{background: 'black', color: "red", padding: 15}}
                onClick={decrement}
            >
                decrement
            </button>

        </div>
    );
}

export default App;
