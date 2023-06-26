import React, {useState, useEffect} from 'react';
import {Ranking} from "./modules/home/ranking/Ranking";
import {RightPanel} from "./modules/home/right_panel/RightPanel";
import {Chat} from "./modules/home/chat/Chat";
import {Metric} from "./modules/home/metric/Metric";
import {Login} from "./modules/home/login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [started, setStarted] = useState(false);
  const [randomNumber,setRandomNumber] = useState(0);
  const [currentNumber,setCurrentNumber] = useState(0);
  const [speed,setSpeed] = useState(1);

  function animateValue(start: number, end: number, duration: number) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    setCurrentNumber(start);
    var increment = end > start? 1 : 1;
    var stepTime = Math.abs(Math.floor(duration / range));
    //var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        setCurrentNumber(current);
        //obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            setStarted(false);
            checkWinner();
        }
    }, stepTime);
}

function genRand(min: number, max: number, decimalPlaces: number) {  
  var rand = Math.random()*(max-min) + min;
  var power = Math.pow(10, decimalPlaces);
  return Math.floor(rand*power) / power;
}

function checkWinner(){
  //here we check users bids and define winner, send data to server


}



  useEffect(() => {

    if(started === true){
      //const rnNumber = Math.floor(Math.random() * 1000) + 1;
      const rnNumber = genRand(0, 100, 0);
      let timeSpeed = 6000 / speed;
      setRandomNumber(rnNumber);
      animateValue(0, rnNumber, timeSpeed);
    }
    
    
  }, [started]);

  
  return (
    <div className="App">
      <div className="container my-12">
        <div className="row g-4">
          <div className="col-md-4">
            {loggedIn ? (
              <RightPanel started={started} setStarted={setStarted} speed={speed} setSpeed={setSpeed} />
            ) : (
              <Login login={()=>setLoggedIn(true)}/>
            )}
          </div>
          <div className="col-md-8">
            <Metric currentNumber={currentNumber}/>
          </div>
        </div>
        <div className="row g-4 mt-4">
          <div className="col-md-6">
            <Ranking/>
          </div>
          <div className="col-md-6">
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
