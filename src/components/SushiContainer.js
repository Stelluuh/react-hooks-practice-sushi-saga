import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi }) {
  const [sushiIndex, setSushiIndex] = useState(0) 

  const displayFour = sushis.slice(sushiIndex, sushiIndex + 4)

  const sushiPlate = displayFour.map(sushi => (
    <Sushi 
      sushi={sushi} 
      key={sushi.id} 
      onEatSushi={onEatSushi}
    />
    )
  )


  function handleClickMore(){
    // console.log('more sushi please')
    setSushiIndex(sushiIndex => (sushiIndex + 4) % sushis.length)
  }

  return (
    <div className="belt">
      {sushiPlate}
      <MoreButton onClickMore={handleClickMore}/>
    </div>
  );
}

export default SushiContainer;
