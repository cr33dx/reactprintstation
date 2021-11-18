
import { Button } from '@mui/material';
import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import './Printing.css';
export default function Customise({ numPage, fileName }) {
  const [isActive, setIsActive] = useState({
    "colored": false,
    "single": false,
  });
  const pricing = {
    "colored": 5,
    "bw": 3,
    "single": 4,
    "double": 5
  }

  const calculatePrice = (numPage) => {
    let clr, side
    clr = isActive["colored"] ? "colored" : "bw"
    side = isActive["single"] ? "single" : "double"
    return (pricing[clr] * pricing[side] * numPage)
  }

  let index = 1
  console.log(isActive)
  return (
    fileName == "" ? <div></div> :
      <div>
        <div className="customise-content">
          <div style={{ textAlign: 'left' }}>
            <h4>Choose the option given below for {fileName}:</h4>
          </div>
          <ButtonGroup class="color-select">
            <Button id={"cs_active_" + !isActive["colored"]} onClick={e => setIsActive({ ...isActive, "colored": !isActive["colored"] })} > B&W Print </Button>
            <Button id={"cs_active_" + isActive["colored"]} onClick={e => setIsActive({ ...isActive, "colored": !isActive["colored"] })}> Coloured Print </Button>
          </ButtonGroup>
          <br />
          <ButtonGroup class="side-select">
            <Button id={"cs_active_" + !isActive["single"]} onClick={e => setIsActive({ ...isActive, "single": !isActive["single"] })}> Single side Print </Button>
            <Button id={"cs_active_" + isActive["single"]} onClick={e => setIsActive({ ...isActive, "single": !isActive["single"] })}> Double side Print </Button>
          </ButtonGroup>
          <div>
            total page : {numPage}
          </div>
          <div>
            total price : {calculatePrice(numPage)}
          </div>
        </div>
      </div>
  )
}



