import React ,{ useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    const [counter,setCounter]=useState(0);
    const incrementCounterValue=() =>{
        setCounter(prevState => prevState + 1);
    };
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={incrementCounterValue}>Increment</button>
      </div>
    );
}
