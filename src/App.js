import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementHandler,
  decrementHandler,
  resetHandler,
} from "./Redux/action";

function App() {
  const dispatch = useDispatch();
  const plus = () => {
    dispatch(incrementHandler());
  };
  const minus = () => {
    dispatch(decrementHandler());
  };
  const count = useSelector((state) => state.counter);
  console.log(count);
  return (
    <div className="App">
      <h1> Redux Counter</h1>
      <div className="counter">
        <button onClick={plus}> +</button>
        <h3> {count} </h3>
        <button onClick={minus}> -</button>
      </div>
      <button onClick={() => dispatch(resetHandler())}> Reset </button>
    </div>
  );
}

export default App;
