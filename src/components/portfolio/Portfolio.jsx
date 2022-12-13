import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { GitHub } from "@material-ui/icons";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
 /* const list = [
    {
      id: "featured",
      title: "Amostras",
    },
    /*{
      id: "web",
      title: "Aplicativo Web",
    },
    {
      id: "mobile",
      title: "Aplicativo App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Contente",
    },
  ]*/

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {data.map((d) => (
          <div>
            <div className="item">
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                <img src={d.img} alt="imagem" />
              </a>
            </div>
              <a href={d.codeGihub} target="_blank" rel="noopener noreferrer">
                <h3><GitHub className="icon2" /> </h3>
              </a>
        </div>
        ))}
      </div>
    </div>
  );
}
