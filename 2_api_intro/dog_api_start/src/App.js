import {useState, useEffect} from "react";
import './App.css';

function App() {

    const [dogImgUrl, setDogImgUrl] = useState("");

  
  useEffect(() => {
    fetchDog()
  }, [])

  const fetchDog = function(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogImgUrl(data.message))
    

  }

  return (
    <div id="app">
    <h1>RANDOGMISER</h1>
    <img id="dog-img" src={dogImgUrl} />
    </div>
  );
}

export default App;
