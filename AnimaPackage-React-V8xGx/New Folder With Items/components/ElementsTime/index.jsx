import React from "react";
import "./ElementsTime.css";

function ElementsTime(props) {
  const { children } = props;

  return (
    <div className="elements-time">
      <div className="time valign-text-middle">{children}</div>
    </div>
  );
}

export default ElementsTime;
