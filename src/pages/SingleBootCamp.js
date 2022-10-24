import React from "react";
import bootCamps from "../data";
import { useParams } from "react-router-dom";
import "../App.css";
export default function SingleBootCamp() {
  const { bootCampId } = useParams();
  const bootCamp = bootCamps.filter(
    (bootCamp) => bootCamp.id === bootCampId
  )[0];
  const { name, description } = bootCamp;
  return (
    <div className="bootCamp-container">
      <h2 className="bootCamp-name">{name}</h2>
      <p className="bootCamp-parag">{description}</p>
    </div>
  );
}
