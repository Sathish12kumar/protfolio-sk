import "./CSS Styles/skill.css";

const Skills = () => {
  const skillSet = [
    {
      icon: "https://img.icons8.com/color/96/html-5--v1.png",
      dark: "https://img.icons8.com/ios-filled/96/html-5--v1.png",
      text: "HTML",
    },
    {
      icon: "https://img.icons8.com/fluency/96/css3.png",
      dark: "https://img.icons8.com/ios-filled/96/css3.png",
      text: "CSS",
    },
    {
      icon: "https://img.icons8.com/color/96/javascript--v1.png",
      dark: "https://img.icons8.com/ios-filled/96/javascript--v1.png",
      text: "JavaScript",
    },
    {
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
      dark: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-bold-tal-revivo.png",
      text: "ReactJS",
    },
    {
      icon: "https://img.icons8.com/fluency/98/typescript--v1.png",
      dark: "https://img.icons8.com/ios-filled/98/typescript.png",
      text: "Typescript",
    },
    {
      icon: "https://img.icons8.com/fluency/98/nextjs.png",
      dark: "https://img.icons8.com/color/98/nextjs.png",
      text: "NextJS",
    },
    {
      icon: "https://img.icons8.com/fluency/96/bootstrap.png",
      dark: "https://img.icons8.com/ios-filled/96/bootstrap.png",
      text: "Bootsraph",
    },
    {
      icon: "https://img.icons8.com/color/96/tailwindcss.png",
      dark: "https://img.icons8.com/material/96/tailwind_css.png",
      text: "TailwindCSS",
    },
    {
      icon: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png",
      dark: "https://img.icons8.com/ios-filled/96/java-coffee-cup-logo--v1.png",
      text: "Java",
    },
    {
      icon: "https://img.icons8.com/color/96/spring-logo.png",
      dark: "/springbootIcon.png",
      text: "SpringBoot",
    },
    {
      icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png",
      dark: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png",

      text: "MongoDB",
    },
    {
      icon: "https://img.icons8.com/color/96/mysql-logo.png",
      dark: "https://img.icons8.com/ios-filled/96/mysql-logo.png",
      text: "MySQL",
    },
    {
      icon: "https://img.icons8.com/color/96/git.png",
      dark: "https://img.icons8.com/ios-filled/96/git.png",
      text: "Git",
    },
    {
      icon: "https://img.icons8.com/glyph-neue/96/github.png",
      dark: "https://img.icons8.com/glyph-neue/96/github.png",
      text: "Github",
    },
  ];
  return (
    <div className="skill" id="Skill">
      <div className="heading">
        <div className="title">Skill</div>
        <div className="subTitle">Tools I use to create</div>
        <div className="para">
          These are the skills I’ve developed through practice, learning, and
          hands-on projects.
        </div>
      </div>
      <div className="skill-con">
        {skillSet.map((v, idx) => (
          <div className="box" key={idx}>
            <div className="img">
              <img src={v.icon} className="colour" />
              <img src={v.dark} className="black" />
            </div>
            <span>{v.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
