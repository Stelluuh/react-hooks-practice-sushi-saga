import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    fetch(API)
    //fetch takes in a URL as its argument and makes an HTTP request/network request and returns a promise object that represents the data source sent back.
      .then(response => response.json()) //.then is called on the promise object returned. It takes a callback function. This CB function uses json() method to convert the promise object into plain text in order to use in the next .then(). in return we also get a Promise.
      .then(data => setSushis(data)) //this then() method is receiving the object that we returned from the first call to then() (our parsed JSON object). We capture the object in the paramater data and pass it into another CB function to manipulate the DOM.
  }, []) // adding [] will only run the fetch once.

  // console.log(sushis)


  return (
    <div className="app">
      <SushiContainer sushis={sushis}/>
      <Table />
    </div>
  );
}

export default App;
