import React from 'react'
import './About.css';
import Image from '../images/grey.jpg';

export default function ChooseUs() {
  return (
    <div>
      <div className="choose-bg">
        <div className="row">
          <div className="col-md-6">
            <div className="choose-content">
              <div className="choose-title">
                <h2>WHY CHOOSE US ?</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <ul className="choose-list">
                    <li> Document printing </li>
                    <li>  Simple online ordering </li>
                    <li> Document printing </li>
                    <li>  Simple online ordering </li>
                    <li> Document printing </li>
                    <li>  Simple online ordering </li>
                  </ul>
                </div>
                <div className="col-md-6" >
                  <ul className="choose-list">
                    <li> Document printing </li>
                    <li>  Simple online ordering </li>
                    <li> Document printing </li>
                    <li>  Simple online ordering </li>
                    <li> Document printing </li>
                    <li>  Simple online ordering </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-content">
              <img
                className="d-block w-100"
                src={Image}
                alt="grey"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
