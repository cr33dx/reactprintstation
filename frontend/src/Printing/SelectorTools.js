import React from 'react'
import FileData from './FileData.js';
import './ToolList.css';
import { Card, List } from '@mui/material';
import ToolList from './ToolList';
import './Printing.css';
import printo from '../images/printo.jpg';

export default function SelectorTools() {

  const [double, setDouble] = React.useState(false);
  const [single, setSingle] = React.useState(false);
  const [black, setBlack] = React.useState(false);
  const [colour, setColour] = React.useState(false);
  const [spiral, setSpiral] = React.useState(false);
  const [sideContent, setSideContent] = React.useState(true);



  const handleDoubleClick = () => {
    setDouble(!double)
    setSingle(false)
    setBlack(false)
    setColour(false)
    setSpiral(false)
    setSideContent(false)
  }
  const handleSingleClick = () => {
    setDouble(false)
    setSingle(!single)
    setBlack(false)
    setColour(false)
    setSpiral(false)
    setSideContent(false)
  }
  const handleBlackClick = () => {
    setDouble(false)
    setSingle(false)
    setBlack(!black)
    setColour(false)
    setSpiral(false)
    setSideContent(false)
  }
  const handleColourClick = () => {
    setDouble(false)
    setSingle(false)
    setBlack(false)
    setColour(!colour)
    setSpiral(false)
    setSideContent(false)
  }
  const handleSpiralClick = () => {
    setDouble(false)
    setSingle(false)
    setBlack(false)
    setColour(false)
    setSpiral(!spiral)
    setSideContent(false)
  }

  return (
    <div className="section" >
      <div className="row">
        <div className="col-md-2">
          <div className="checkbox-pannel">

          </div>
        </div>
        <div className="col-md-4">
          <ToolList
            handleDoubleClick={handleDoubleClick}
            setDouble={setDouble}
            setSingle={setSingle}
            setBlack={setBlack}
            setColour={setColour}
            setSpiral={setSpiral}
            handleColourClick={handleColourClick}
            handleSingleClick={handleSingleClick}
            handleSpiralClick={handleSpiralClick}
            handleBlackClick={handleBlackClick}
          />
          {/* <h1>{e.question}</h1> */}
        </div>
        <div className="col-md-4">
          <div className="data-part">
            {sideContent ? <div><img src={printo} alt="print" width="400px" height="500px" /> </div> : ""}
            {double ?
              <div>
                <Card className="price-page" style={{ height: '400px' }}>
                  <h4>Price : 0.75/Page</h4>
                  <div>
                    <h5>Total Page : 20</h5>
                    <h5>Total Price: Rs 100</h5>
                  </div>
                </Card>
              </div>
              : ""}
            {single ? <h1>I am Single Side Print </h1> : ""}
            {black ? <h1>I am Black</h1> : ""}
            {colour ? <h1>I am Colour Print</h1> : ""}
            {spiral ? <h1>I am spiral print</h1> : ""}
          </div>
        </div>
        <div className="col-md-2">

        </div>
      </div>
    </div>
  )
}
