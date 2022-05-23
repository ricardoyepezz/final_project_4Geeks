import React from 'react';
import { useState } from "react";

export function Rating() {
    const [ranking, setRank] = useState(0);
  
    return (
      <div className="Rating d-flex ">
        <fieldset className="rating">
          <legend>
            {ranking == 0 ? "No has calificado" : "Calificaste:" + ranking}
          </legend>
          <input
            type="radio"
            id="star5"
            name="rating"
            value="5"
            onChange={(e) => {
              setRank(e.target.value);
            }}
          />
          <label for="star5" title="Rocks!">
            5 stars
          </label>
          <input
            type="radio"
            id="star4"
            name="rating"
            value="4"
            onChange={(e) => {
              setRank(e.target.value);
            }}
          />
          <label for="star4" title="Pretty good">
            4 stars
          </label>
          <input
            type="radio"
            id="star3"
            name="rating"
            value="3"
            onChange={(e) => {
              setRank(e.target.value);
            }}
          />
          <label for="star3" title="Meh">
            3 stars
          </label>
          <input
            type="radio"
            id="star2"
            name="rating"
            value="2"
            onChange={(e) => {
              setRank(e.target.value);
            }}
          />
          <label for="star2" title="Kinda bad">
            2 stars
          </label>
          <input
            type="radio"
            id="star1"
            name="rating"
            value="1"
            onChange={(e) => {
              setRank(e.target.value);
            }}
          />
          <label for="star1" title="Sucks big time">
            1 star
          </label>
        </fieldset>
      </div>
    );
  }
  