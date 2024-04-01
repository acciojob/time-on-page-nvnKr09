import {React, useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  
  const [seconds, setSeconds] = useState(0);
  
  useEffect(()=>{
    setTimeout(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  })
  
  
  return (
    <div>
    {`You've been on this page for ${seconds} seconds`}
    </div>
  )
}

export default App
