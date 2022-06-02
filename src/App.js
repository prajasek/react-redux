import logo from './logo.svg';
import './App.css';
import reducer, {try1} from './features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  console.log("Rendering...")

  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  //dispatch({type: 'counter/increment'})
  console.log("State is ", state);

  return (
 <div>
  <button onClick={() => 
    dispatch({type:"counter/increment"})}
   > Increment </button>
 </div>
  );
}

export default App;
