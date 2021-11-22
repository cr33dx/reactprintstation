import React, { useEffect } from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Image from '../images/printing-man.jpg';
import Customise from './Customise';
// import SelectorTools from './SelectorTools';
import Uploader from './Uploader';
import { getNumPages } from '../utils/utils';


export default function Printing() {
  const [numPage, setNumPage] = useState(1)
  const [fileName, setFileName] = useState("")
  const [file, setFile] = useState(undefined)

  useEffect(async () => {
    if (file !== undefined) {
      let arrayBuff, int8Arr, numPageIn
      setFileName(file.target.files[0].name)
      arrayBuff = await file.target.files[0].arrayBuffer()
      int8Arr = new Int8Array(arrayBuff)
      numPageIn = await getNumPages(int8Arr)
      setNumPage(numPageIn)
    }
  }, [file])

  return (
    <div>
      <Card className="text-white">
        <Card.Img src={Image} alt="Card image" className="print-bg" />
        <Card.ImgOverlay className="title-content">
          <Card.Title className="about-title">PRINTING</Card.Title>
        </Card.ImgOverlay>
      </Card>
      <div className="uploader-container">
        <Uploader setFile={setFile} />
      </div>
      <div className="file-selector">
        {/* <SelectorTools /> */}
        <Customise fileName={fileName} numPage={numPage} />
      </div>
      <div xs={12} className="footer">
        <Footer />
      </div>
    </div>
  )
}
