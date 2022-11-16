import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100);
  

  useEffect(() => {
    fetch(API)
      .then(response => response.json()) 
      .then(data => setSushis(data)) 
  }, []) 

  // console.log(sushis)
  
  function eatSushi (eatenSushi) {
    
    const moneyLeft = wallet - eatenSushi.price

    if (moneyLeft >= 0) {

      setWallet(moneyLeft) 
      
      setSushis(sushis.map(sushi => sushi.id === eatenSushi.id ? {...sushi, eaten: true} : sushi)
      )}
    }

    const emptySushiPlate = sushis.filter(sushi => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        onEatSushi={eatSushi}
      />
      <Table 
        plates = {emptySushiPlate}
        wallet = {wallet} 
      />
    </div>
  );
}

export default App;
