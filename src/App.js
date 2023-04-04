import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  //console.log('App component has been executed....');

  // const [state, setState] = useState(initialState);

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <div>
      <Header />

      <div id="main-content">
        <p>Number of likes: {counter}</p>

        <button onClick={increaseCounter}>+</button>

        <button onClick={decreaseCounter}>-</button>
      </div>

      <Footer />
    </div>
  );
}
