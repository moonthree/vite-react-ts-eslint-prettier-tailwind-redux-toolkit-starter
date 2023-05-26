import React, { useState } from 'react';
import { AppDispatch, RootState } from '../store';
import { decrement, increment } from '../store/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const [click, setClick] = useState(false);

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='mx-auto my-auto'>
        <h1
          className={`${
            click ? 'text-red-300' : 'text-blue-300'
          } text-3xl font-bold transition duration-300 ease-in-out`}
        >
          Hello world!
        </h1>
        <button
          type='button'
          onClick={() => {
            setClick(!click);
          }}
          className='border-2 p-3 border-blue-300 rounded-xl hover:bg-blue-300 hover:text-white transition duration-500 ease-in-out'
        >
          Click!
        </button>
      </div>
      <div className='mx-auto my-auto space-x-3'>
        <button onClick={handleIncrement} className='border-2 p-3'>
          +
        </button>
        <span>Count: {count}</span>
        <button onClick={handleDecrement} className='border-2 p-3'>
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
