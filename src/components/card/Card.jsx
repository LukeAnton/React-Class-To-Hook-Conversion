import React from "react";
import "./card.css";

const Card = ({ monster: { name, id, email } }) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set5&size=180x180`}
        alt="monster"
      />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
