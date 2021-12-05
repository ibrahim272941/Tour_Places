import React, { useState, useEffect } from "react";
import "./Cards.css";
import { data } from "../../helpers/data";

function Cards() {

 
  
  return (
    <div className="card-container">
      {data.map((card) => {
        return (
          <div className="cards" key={card.id}>
            <div className="title">
              <h2>{card.title}</h2>
            </div>

            <img src={card.image} alt="" />
            <div className="card-over">
              <iframe
              
                id="video"
                width="420"
                height="310"
                src={card.video}
                
              ></iframe>
              <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;

