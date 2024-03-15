import React from "react";

export default function Main(props) {
  return (
    <div className="jinks">
      <img src={props.img} className="Main-image" alt="Main"></img>
      <div>
      <span className="location">{props.location}</span>
      <span className="locationpoint">{props.locationpoint}</span>
      </div>
      <div>
      <span className="title">{props.title}</span>
      </div>
      <div>
      <span className="date">{props.date}</span>
      </div>
      <div>
      <span className="description">{props.description}</span>
      </div>
    </div>
  );
}
