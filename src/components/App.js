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
    //we want to manipulate each sushi so we need to use map and give us a new array with the changed data. in the map, we want to say: does the sushi id that we are looking at match the id we are passing in? if it does we want to return that new piece of sushi. And we are going to use the spread operator on sushi and set eaten to true. If the id matches, we are going to create a new one, we are going to spread the old sushi data to it and add eaten and set it to true:
    setSushis(sushis.map(sushi => sushi.id === id ? {...sushi, eaten: true} : sushi)
  )}

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        onEatSushi={eatSushi}
      />
      <Table />
    </div>
  );
}

export default App;
