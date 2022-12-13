import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import imagen from "./t2.png";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Desenvolvedor Front-End", 
        "Desenvolvedor Back-End", 
        "Designer",
        "JavaScript",
        "typescript",
        "Reactjs",
        "nodejs",
        "bootstrap",
        "html5",
        "css3",
      ],
    });
  }, []);

  return (
    <div className="intro2" id="intro">
      <h3 className="titolo">
        Habilidades <span ref={textRef}></span>
      </h3>
      <div className="right">
        <div className="wrapper"></div>
        <a href="#portfolio">
          <img src={imagen} alt="img" className="img" />
        </a>
      </div>
    </div>
  );
}
