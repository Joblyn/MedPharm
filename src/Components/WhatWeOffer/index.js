import React from "react";
import './style.css';

export default function WhatWeOffer() {
  return <div className="wwo-container p-4">
    <h3 className="mb-3">What we offer</h3>
    <div className="d-flex flex-row">
      <div class="img-cont col-lg-4 col-sm-12 m-3 d-flex justify-content-flex-end">
        <p>A SOCIAL PLATFORM TO INTERACT AND LEARN FROM EXPERTS</p>
      </div>
      <div class="img-cont col-lg-4 col-sm-12 m-3 d-flex justify-content-flex-end">
        <p>MEDICAL CONSULTATIONS</p>
      </div>
      <div class="img-cont col-lg-4 col-sm-12 m-3 flex justify-content-flex-end">
        <p>PRESCRIPTIONS DELIVERED TO YOU</p>
      </div> 
    </div>
  </div>;
}
