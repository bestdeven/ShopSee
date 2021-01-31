import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import logoOutline from "./logo-outline.png";
import "./style.css";

export default function Logo(props) {
  return (
    <div className="logo">
      {/* <img src={logoOutline} width="70" height="70" /> */}
      <img src={logo} width="70" height="70" />
      <div className="logo__text">ShopSee</div>
    </div>
  );
}
