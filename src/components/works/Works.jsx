import { useState } from "react";
import { GitHub } from '@material-ui/icons'
import Video from "../video/video";
import Video2 from "../video/video2";
import Video3 from "../video/video3";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "https://laudierst.tk/prisma3.png",
      url: "https://github.com/Laudier2/api-rest-test-prisma",
      title: "API com nodejs DB postgresSQL",
      desc:"Neste projeto iremos construir uma pai usando typescript, nodejs, express e o ORM prisma, lembrando que vamos deixa esse conteúdo disponível no GITHUB e no nosso site",
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "API com nodejs DB mongodb",
      desc: "Neste projeto iremos construir uma pai restful, nodejs, express, lembrando que vamos deixa esse conteúdo disponível no GITHUB e no nosso site.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: 3,
      icon: "./assets/writing.png",
      title: "Instalando o kali dual boot com windows 10",
      desc:
        "Neste tutorial iremos demostra como instala o kali Linux dual boot com windows 10, para você que esta querendo usar o Linux para seus testes de desenvolvimento.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.url} target="_blank" rel="noopener noreferrer">
                    <GitHub />
                  </a>
                </div>
              </div>
              <div className="right">
             { d.id === 1 ?  <Video /> : "" }
             { d.id === 2 ? <Video2 /> : "" }
             { d.id === 3 ? <Video3 /> : "" }
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
