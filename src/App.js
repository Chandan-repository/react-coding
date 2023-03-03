import React, { useState } from 'react';

import './style.css';

// don't change the Component name "App"
export default function App() {
  const [messageValidity, setMessageValidity] = useState('Invalid');
  const clickHandler = (event) => {
    const value = event.target.value;
    if (value.length < 3) {
      setMessageValidity('Invalid');
    } else {
      setMessageValidity('Valid');
    }
  };
  return (
    <form>
      <label>Your message</label>
      <input type="text" onChange={clickHandler} />
      <p>{messageValidity} message</p>
    </form>
  );
}
