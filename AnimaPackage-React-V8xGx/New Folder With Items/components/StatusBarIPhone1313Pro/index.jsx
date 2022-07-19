import React from "react";
import ElementsTime from "../ElementsTime";
import ElementsMicCam from "../ElementsMicCam";
import ElementsSignal from "../ElementsSignal";
import ElementsConnection from "../ElementsConnection";
import ElementsBattery from "../ElementsBattery";
import "./StatusBarIPhone1313Pro.css";

function StatusBarIPhone1313Pro(props) {
  const { elementsTimeProps } = props;

  return (
    <div className="status-bar-i-phone-13-13-pro">
      <ElementsTime>{elementsTimeProps.children}</ElementsTime>
      <div className="flex-col">
        <ElementsMicCam />
        <div className="indicators">
          <ElementsSignal />
          <ElementsConnection />
          <ElementsBattery />
        </div>
      </div>
    </div>
  );
}

export default StatusBarIPhone1313Pro;
