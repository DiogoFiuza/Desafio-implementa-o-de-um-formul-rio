import React, { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import MyContext from '../contexts/myContext';

import '../style/Contador.css';

export default function Contador() {
  const { counter, setCounter } = useContext(MyContext);

  const travaZero = () => {
    setCounter(counter - 1);
    if (counter <= 0) setCounter(0);
  };

  return (
    <section className="counterContainer">
      <button type="button" data-testId="minus" className="button" onClick={() => travaZero()}>
        <AiOutlineMinus />
      </button>
      <input data-testId="result" className="inputValue" value={counter} />
      <button type="button" data-testId="plus" className="button" onClick={() => setCounter(counter + 1)}>
        <AiOutlinePlus />
      </button>
    </section>
  );
}
