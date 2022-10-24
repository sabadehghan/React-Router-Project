import React from "react";
import bootCamps from "../data";
import { Link } from "react-router-dom";
export default function BootCamps() {
  return (
    <>
      {bootCamps.map((bootCamp) => {
        return (
          <article key={bootCamp.id} className="bootCamps">
            <Link to={`/bootCamps/${bootCamp.id}`}>{bootCamp.name}</Link>
          </article>
        );
      })}
    </>
  );
}
