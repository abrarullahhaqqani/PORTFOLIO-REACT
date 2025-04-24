import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="email">
          <a
            href="mailto:abrarullahhaqqani@gmail.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <span>abrarullahhaqqani@gmail.com</span>
          </a>
        </div>
        <div className="f-icons">
          <a href="https://github.com/abrarullahhaqqani" target="_blank">
            {" "}
            <Github color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/abrarullah-haqqani-4aa7a6228/"
            target="_blank"
          >
            {" "}
            <LinkedIn color="white" size="3rem" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
