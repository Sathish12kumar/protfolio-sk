import { useState } from "react";
import "./CSS Styles/navbar.css";
const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);

  const navlinks = [
    { title: "home", path: "#Home" },
    { title: "about", path: "#about" },
    { title: "skills", path: "#Skill" },
    { title: "education", path: "#Education" },
    { title: "project", path: "#Project" },
    { title: "contact", path: "#Contact" },
  ];
  return (
    <nav>
      <div className="logo">sathish</div>
      <div
        className="menu"
        onClick={() => setNavBtn(navBtn == true ? false : true)}
      >
        {navBtn == true ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      <ul>
        {navlinks.map((li, id) => (
          <li key={id}>
            <a href={li.path}>{li.title}</a>
          </li>
        ))}
      </ul>
      <a href="/resume.pdf" download="/resume.pdf" className="btn">
        Resume <i className="fa-solid fa-download"></i>
      </a>
      <div className={`hidden ${navBtn == true ? "active" : "none"}`}>
        {navlinks.map((li, id) => (
          <li key={id}>
            <a href={li.path}>{li.title}</a>
          </li>
        ))}
        <a href="/resume.pdf" download="/resume.pdf" className="btn">
          Resume <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
