import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/config";
import { MINUS_ONE, PLUS_AMOUNT, PLUS_ONE } from "../store/slices/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>현재 count 값 : {count}</h1>
      <button onClick={() => dispatch(PLUS_ONE())}>+1</button>
      <button onClick={() => dispatch(MINUS_ONE())}>-1</button>
      <button onClick={() => dispatch(PLUS_AMOUNT(5))}>+5</button>
    </div>
  );
}

export default App;
