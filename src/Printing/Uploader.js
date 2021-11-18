import React, { useRef, useState } from 'react'
import './Printing.css'
import Image2 from '../images/printicon2.png';


export default function Uploader({ setFile }) {
  const inputFileRef = useRef(null)

  return (
    <div>
      {/* <div className="uploader-content"> */}
      {/* <div className="doc-image">
          <img src={Image2} alt=" print" width="300px" height="250px" />
        </div> */}
      <button
        className="upload-btn"
        onClick={() => {
          // Single File Upload
          selectFiles({ multiple: true }, (files) => {
            // Note callback return an array
            files.map(({ source, name, size, file }) => {
              console.log({ source, name, size, file })
            })
            // Todo: Upload to cloud.
          })
        }}
      >
        Click to Upload
      </button>
      <div>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={e => {
            setFile(e)
          }}
          ref={inputFileRef}
        />
        <button onClick={e => inputFileRef.current.click()}>
          Upload
          </button>

        <p class="fileTypeError">Please Select A PDF File Only</p>
      </div>


    // </div>
  )
}
