import React, { useContext } from "react";
import "./Intro.css";
import github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import galssEmoji from "../../img/glassesimoji.png";
import heart from "../../img/heartemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkmode = theme.state.Darkmode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={darkmode ? { color: "white" } : { color: "" }}>
            Hi! I Am
          </span>
          <span>Abrarullah Haqqani</span>
          <span style={darkmode ? { color: "white" } : { color: "" }}>
            Final Year Undergrad at NIT warangal Doing My B.Tech in EEE and a
            minor degree in CS.My Intrestes are Web developmemt And Problem
            Solving using Computer Programming
          </span>
        </div>
        <a
          href="https://drive.google.com/file/d/1rgvmjnpqCef3ceXAOpydSskArugG3Hoa/view?usp=drive_link"
          target="_blank"
        >
          <button className="i-button button">Download CV</button>
        </a>
        <div className="i-icons">
          <a href="https://github.com/abrarullahhaqqani" target="_blank">
            <img src={github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/abrarullah-haqqani-4aa7a6228/"
            target="_blank"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" style={{ width: "100%", height: "50%" }} />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={galssEmoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "58%" }}
          whileInView={{ left: "48%" }}
          transition={transition}
          style={{ top: "-4%", left: "48%" }}
          className="floatingdiv"
        >
          <FloatingDiv image={heart} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "-4rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floatingdiv"
        >
          <FloatingDiv image={thumbup} txt1="Programmer" txt2="  " />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
