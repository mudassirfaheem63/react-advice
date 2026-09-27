import './App.css';
import { use, useState } from 'react';

function App() {

  const [advice, setAdvice] = useState('')
  const [count, setCount] = useState(0)
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((res) =>{ console.log(res.slip.advice);
  setAdvice(res.slip.advice);
  setCount(count + 1)
  })
  .catch((error) => console.log(error));
}
  
 


  return (
    <>
      <h1>Muhammad Mudassir Mallah</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>click me </button>
      <p>you have read {count} advice</p>
    </>
  );
}

export default App;
