import { addCount,decCount } from "./store/action.js";
import {useDispatch, useSelector} from "react-redux"


import './App.css';

function App() {
  const dispatch = useDispatch();
  const Counter=useSelector((state)=>state.count)
  const handleInc = () => {
    dispatch(addCount(1))
  }
   const handleDec = () => {
    dispatch(decCount(1))
  }
  return (
    <div className="App">
      <h1>Counter: { Counter}</h1>
      <button onClick={handleInc}>Increase Count</button>
       <button onClick={handleDec}>Decrease Count</button>
    </div>
  );
}

export default App;
