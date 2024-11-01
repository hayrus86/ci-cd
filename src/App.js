import { useState } from "react";
import {sum} from "./helpers/sum/sum";

function App() {
    const [state, setState] = useState(0)

    const increment = () => setState(prev => sum(prev, 1));

    return (
        <div className="App">
            <h1 style={{fontSize: 70, color: 'blue'}}>value = {state}</h1>
            <button
                style={{background: 'black', color: "white", padding: 15}}
                onClick={increment}
            >
                incremernt
            </button>
        </div>
    );
}

export default App;
