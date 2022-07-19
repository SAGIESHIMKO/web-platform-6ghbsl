import React from "react";
import StatusBarIPhone1313Pro from "../StatusBarIPhone1313Pro";
import "./Home.css";

function Home(props) {
  const {
    profile,
    classes,
    search,
    theExecutor,
    theExecutorIsAmon,
    place1,
    darthsTieAdvanced,
    tieAdvanced1,
    withLaserCannonsA,
    place2,
    statusBarIPhone1313ProProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <div className="group-49">
          <div className="group-container">
            <img className="group" src="/img/group@1x.svg" />
            <div className="group-47">
              <img className="group-10" src="/img/group-10-2@2x.svg" />
              <div className="profile valign-text-middle proximanova-regular-normal-blackcurrant-14px">{profile}</div>
            </div>
            <div className="group-48">
              <img className="t-d7j-cz" src="/img/td7jcz@2x.svg" />
              <div className="classes valign-text-middle proximanova-regular-normal-blackcurrant-14px">{classes}</div>
            </div>
            <div className="group-51">
              <div className="overlap-group">
                <div className="ellipse-2"></div>
                <img className="line-1" src="/img/line-1@2x.svg" />
              </div>
              <div className="search valign-text-middle proximanova-regular-normal-blackcurrant-14px">{search}</div>
            </div>
          </div>
        </div>
        <div className="group-33">
          <StatusBarIPhone1313Pro elementsTimeProps={statusBarIPhone1313ProProps.elementsTimeProps} />
        </div>
        <div className="overlap-group3 proximanova-regular-normal-bon-jour-16px">
          <img className="group-52" src="/img/group-52@2x.svg" />
          <img className="the-executor" src={theExecutor} />
          <div className="rectangle-33"></div>
          <p className="the-executor-is-amon valign-text-middle">{theExecutorIsAmon}</p>
          <div className="overlap-group-1">
            <div className="place valign-text-middle proximanova-medium-cultured-pearl-20px">{place1}</div>
          </div>
          <div className="tie-advanced-container">
            <img className="darths-tie-advanced" src={darthsTieAdvanced} />
            <img className="tie-advanced-1" src={tieAdvanced1} />
          </div>
          <p className="with-laser-cannons-a valign-text-middle">{withLaserCannonsA}</p>
          <div className="overlap-group1">
            <div className="place valign-text-middle proximanova-medium-cultured-pearl-20px">{place2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
