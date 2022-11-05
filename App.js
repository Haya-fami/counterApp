
import './App.css';
import {useState} from 'react';
import Counter from './counter';


function App() {
  const [count, setCount] = useState(0) // count=0 , setCount=function
  return (
    <div className='body'>
      <div className="App">

        <button onClick={
          ()=> {
            setCount(count+1)}
            }>
          ADD</button>

        <button onClick={
          ()=>{setCount(count-1)}
        }>SUBTRACT</button>

        <Counter count={count} />

        <button id="reset" onClick={
          ()=>{setCount(count-count)}
        }>RESET</button>
      </div>
    </div>
  );
}

export default App;
