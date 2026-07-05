import "./CSS Styles/footer.css";

const Footer = () => {
  const socialLinks = [
    {
      icon: "fa-solid fa-envelope",
      path: "https://mail.google.com/mail/?view=cm&fs=1&to=sathish120305@email.com",
    },
    {
      icon: "fa-brands fa-square-linkedin",
      path: "https://www.linkedin.com/in/12-sathish-kumar/",
    },
    {
      icon: "fa-brands fa-codepen",
      path: "https://codepen.io/sathishkumar-boopathi",
    },
    { icon: "fa-brands fa-github", path: "https://github.com/Sathish12kumar" },
  ];
  return (
    <div className="footer">
      <div className="logo">
        <a href="#Home">
          <img src="/logo.jpeg" /> <span>sathish</span>
        </a>
      </div>
      <div className="rights"> &copy; 2026 Sathish All rights reserved</div>
      <div className="links">
        {socialLinks.map((i, id) => (
          <a href={i.path} key={id}>
            <i className={i.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
