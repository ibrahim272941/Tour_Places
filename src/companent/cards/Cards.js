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
                width="410"
                height="310"
                src={card.video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder={"none"}
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
