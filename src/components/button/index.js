import React from "react";
import "./style.css";

export default function Button(props) {
  return (
    <a class="btn10" style={{cursor:"pointer"}}>
      <span>{props.name}</span>
      <div class="transition"></div>
    </a>
  );
}
