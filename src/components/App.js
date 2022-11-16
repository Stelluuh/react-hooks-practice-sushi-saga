import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  

  useEffect(() => {
    fetch(API)
      .then(response => response.json()) 
      .then(data => setSushis(data)) 
  }, []) 

  // console.log(sushis)
  
  function eatSushi (id) {
    
    setSushis(sushis.map(sushi => sushi.id === id ? {...sushi, eaten: true} : sushi)
  )}

    const emptySushiPlate = sushis.filter(sushi => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        onEatSushi={eatSushi}
      />
      <Table 
        plates = {emptySushiPlate} 
      />
    </div>
  );
}

export default App;
