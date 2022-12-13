import "./topbar.scss";
import { Person, Mail, GitHub, Facebook, Instagram, WhatsApp, LinkedIn, YouTube } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Laudier.ST
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <WhatsApp className="icon" />
            <span>+55 75998172448</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>josesantanadeveloper@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/Laudier2?tab=repositories" target="_blank" style={{ color: "inherit" }} rel="noopener noreferrer">
              <GitHub className="icon1" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008967008790" target="_blank" style={{ color: "inherit" }} rel="noopener noreferrer">
              <Facebook className="icon2" />
            </a>
            <a href="https://www.instagram.com/jsdeveloper2021/" target="_blank" style={{ color: "inherit" }} rel="noopener noreferrer">
              <Instagram className="icon2" />
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-santana-de-jesus-8949b3124/" target="_blank" style={{ color: "inherit" }} rel="noopener noreferrer">
              <LinkedIn className="icon2" />
            </a>
            <a href="https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g" target="_blank" style={{ color: "inherit" }} rel="noopener noreferrer">
              <YouTube className="icon3" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
