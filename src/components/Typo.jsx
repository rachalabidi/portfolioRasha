import React, { useEffect } from "react";
import Typed from "typed.js";
import "./style/Typo.css";

const Typo = () => {
  useEffect(() => {
    // Initialize Typed.js after the component mounts
    const typing = new Typed(".text", {
      strings: [
        " ",
        " Rasha Labidi ",
        " a Student ",
        " a Coffee drinker ",
        " a Self-taught ",
        " a Web Developer ",
        "a  UI/UX Designer ",
        " ",
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    });

    // Clean up Typed instance on component unmount
    return () => {
      typing.destroy();
    };
  }, []);

  return (
    <div className="typo">
      <div className="im">I'm </div>
      <div className="text"></div>
    </div>
  );
};

export default Typo;
