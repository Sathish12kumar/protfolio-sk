import "./CSS Styles/about.css";

const About = () => {
  const aboutPara = [
    "As a Java Web Developer fresher, I focus on building efficient, scalable, and structured web applications. I have a solid understanding of Java fundamentals and backend development principles.",
    "I have worked with Java-based technologies and databases to develop functional web projects that emphasize clarity and performance. I am always eager to learn best practices and modern development approaches.",
    "My goal is to continuously improve as a developer and contribute to meaningful software solutions that create real impact.",
  ];
  const smallSkill = [
    {
      icon: "fa-solid fa-code",
      heading: "Clean code",
      text: "Writing readable, clean, and maintainable code.",
    },
    {
      icon: "fa-regular fa-clock",
      heading: "Time Management",
      text: "Can handle multiple tasks and projects efficiently.",
    },
    {
      icon: "fa-solid fa-puzzle-piece",
      heading: "Problem Solving",
      text: "Ability to think logically and debug code efficiently.",
    },
    {
      icon: "fa-solid fa-shuffle",
      heading: "Adaptability",
      text: "Comfortable working in dynamic environments and learning on the go.",
    },
  ];
  return (
    <div className="about" id="about">
      <div className="left-con">
        <div className="title">About me</div>
        <div className="subTitle">
          Building reliable web solutions with Java
        </div>
        {aboutPara.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
      <div className="right-con">
        <div className="skillSet">
          {smallSkill.map((val, idx) => (
            <div className="skills" key={idx}>
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <div className="skill-heading">{val.heading}</div>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
