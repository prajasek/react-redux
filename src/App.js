import logo from './logo.svg';
import './App.css';
import reducer, {try1, /* increment */} from './features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
 

function App() {
  console.log("Rendering...")

  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  console.log("State is ", state);

  return (
 <div>
  <button onClick={() => 
    dispatch({type:"counter/increment"})}   // same as 'dispatch(increment())'
                                            // 'increment' action-creator from counterSlice.actions
   > Increment </button>
 </div>
  );
}

export default App;
