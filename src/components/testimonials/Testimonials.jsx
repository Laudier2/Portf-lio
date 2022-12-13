import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Agleide Felix",
      title: "Cliente adquiriu um Ecomerce",
      img: "assets/Aglede.png",
      icon: "assets/f.png",
      url: "https://www.facebook.com/agleide.felix",
      desc: "Vendia em casa e resolvi montar um negócio online, foi onde eu o conheci, e ele montou minha loja online, fiquei super satisfeita.",
      featured: true,
    },
    {
      id: 2,
      name: "YouTube",
      title: "Laudierst",
      img: "https://yt3.ggpht.com/ytc/AKedOLS25xODIa2dLDw9jW-Z0LDUi-mtQImdNMuBVdxS=s88-c-k-c0x00ffffff-no-rj",
      icon: "assets/youtube.png",
      url: "https://www.youtube.com/channel/UCk8HdZCe8RFMkZqVIQ0mL3g",
      desc: "Crio conteúdos para ajudar pessoas que deseja aprender a programar e desenvolver seu próprio site ou app. ",
      featured: true,
    },
    {
      id: 3,
      name: "Laudier2 nome no GitHub",
      title: "Desenvovedor",
      img: "assets/Laudier.png",
      url: "https://github.com/Laudier2/",
      icon: "assets/g.png",
      desc: "Visite meus projetos no github, confira o meu trabalho por outro angulo!",
      featured: true,
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testemunhas</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                <img src="assets/right-arrow.png" className="left" alt="" />
              </a>
              <img className="user" src={d.img} alt="" />
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                <img className="right" src={d.icon} alt="" />
              </a>
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
