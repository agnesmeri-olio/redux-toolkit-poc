import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{
      width: '200px',
      margin: '10px',
    }}>
      <h1>Counter</h1>
      <button type='button' onClick={() => dispatch(increment())}>+</button>
      <div>{counterValue}</div>
      <button type='button' onClick={() => dispatch(decrement())}>-</button>
    </div>
    )
}

export default Counter;
