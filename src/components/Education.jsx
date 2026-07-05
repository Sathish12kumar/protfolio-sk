import "./CSS Styles/education.css";

const Education = () => {
  const educationDetails = [
    {
      year: "2022 - 2026 ",
      role: "Bachelor of Computer Science",
      company: "Muthayammal College of Engineering",
      img: "/MCElogo.png",
    },
    {
      year: "2020 - 2022",
      role: "Higher Secondary (12th) , Bio-Maths Stream",
      company: "Government Higher Secondary School , R.Pudupayalam",
      img: "https://images.seeklogo.com/logo-png/34/2/tamilnadu-govt-logo-png_seeklogo-341227.png",
    },
    {
      year: "2018 - 2020",
      role: "Secondary (10th)",
      company: "SRV Boys Higher Secondary School",
      img: "/SRVlogo.png",
    },
  ];
  return (
    <div className="education" id="Education">
      <div className="heading">
        <div className="title">Education</div>
        <div className="subTitle">Shaping my path through education</div>
        <div className="para">
          My educational journey has helped me develop strong fundamentals,
          discipline, and a passion for learning.
        </div>
      </div>
      <div className="edu-con">
        <div className="line"></div>
        {educationDetails.map((edu, idx) =>
          idx % 2 == 0 ? (
            <div className="edu-box" key={idx}>
              <div className="empty">
                <img src={edu.img} alt="logo" />
              </div>
              <div className="flex-grow">
                <div className="year">{edu.year}</div>
                <div className="role">{edu.role}</div>
                <div className="company">{edu.company}</div>
              </div>
            </div>
          ) : (
            <div className="edu-box" key={idx}>
              <div className="flex-grow">
                <div className="year">{edu.year}</div>
                <div className="role">{edu.role}</div>
                <div className="company">{edu.company}</div>
              </div>
              <div className="empty">
                <img src={edu.img} alt="logo" />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Education;
