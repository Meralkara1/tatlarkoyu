import React from "react";
import Policy from "../Policy/Policy";
import "./Footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="subscribe-row">
        <Policy />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
