import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis }) {
  const [sushiIndex, setSushiIndex] = useState(0) //set state to start at 0 - this will be used for the .slice() method. 
  
  //.slice(start, end)
  const displayFour = sushis.slice(sushiIndex, sushiIndex + 4)
  const sushiPlate = displayFour.map(sushi => <Sushi sushi={sushi} key={sushi.id}/>)


  function handleClickMore(){
    // console.log('more sushi please')
    setSushiIndex(sushiIndex + 4)
  }

  return (
    <div className="belt">
      {sushiPlate}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
