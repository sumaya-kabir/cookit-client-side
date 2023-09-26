import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, icon }) {
  return (
    <div className="number text-center p-4 m-3 w-25">
        <span>{icon}</span>
        <br />
        <CountUp duration={10} className="counter fs-1 fw-bold" end={number} />
        <br />
        <span className="fw-light">{title}</span>
    </div>
  );
}