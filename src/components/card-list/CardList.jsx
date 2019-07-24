import React from "react";
import "./card-list.css";
const CardList = ({ name, children }) => {
  console.log();

  return <div className="card-list">{children}</div>;
};

export default CardList;
