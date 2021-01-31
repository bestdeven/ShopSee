import React, { useState, useEffect } from "react";
import Logo from "../logo/index";
import Button from "../button/index";
import "./style.css";

export default function Header(props) {
  return (
    <div className="header">
      <Logo />
      <Button name="Join Waitlist!" />
    </div>
  );
}
