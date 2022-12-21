import {useState, useEffect} from 'react'
import './App.css';

function App() {


  const [number, setNumber] = useState(1);
  const [fizzBuzz, setFizzBuzz] = useState("");
  
  useEffect(() => {
    if(number % 3 === 0){
      setFizzBuzz('Fizz')
    }
    else if(number % 5 === 0){
      setFizzBuzz('Buzz')
    }
    else if(number % 3 === 0 && 5 === 0){
      setFizzBuzz('FizzBuzz')
    }
    else {
      setFizzBuzz(number);
    }
  }, [number]);

  const handleInc = () => {
    let newNum = number + 1;
    setNumber(newNum);
   
  }

  const handleDec = () => {
    let newNum = number - 1;
    setNumber(newNum);
  }
  return (
    <div>
      <button value={number} onClick={handleInc}>+</button>
      <button value={number} onClick={handleDec}>-</button>
      <h2>Your FIZZBUZZ Number is {number}</h2>
      <h2>Fizzbuzz? : {fizzBuzz}</h2>
    </div>
  );
}

export default App;



