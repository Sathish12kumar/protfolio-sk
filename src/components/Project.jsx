import "./CSS Styles/project.css";

const Project = () => {
  const projectContents = [
    {
      img: "/FoodRecipe.png",
      name: "Food Recipe finder",
      path: "https://food-recipe-jmkp.vercel.app/",
    },
    {
      img: "/ReactQuiz.png",
      name: "React quiz application",
      path: "https://sk-quiz-rouge.vercel.app/",
    },
    {
      img: "/Weather.jpg",
      name: "Mini Calender",
      path: "https://sk-weather-api.vercel.app/ ",
    },
    {
      img: "/todos.jpg",
      name: "Todo Application",
      path: "https://sk-todos.vercel.app/",
    },
  ];
  return (
    <div className="project" id="Project">
      <div className="heading">
        <div className="title">Project</div>
        <div className="subTitle">Ideas in action</div>
        <div className="para">
          A collection of projects that showcase my creativity, problem-solving,
          and progress.
        </div>
      </div>
      <div className="project-con">
        {projectContents.map((con, idx) => (
          <div className="pro-box" key={idx}>
            <div className="img">
              <img src={con.img} alt="img" />
              <div className="btn">
                <button>
                  <a href={con.path}>click here</a>
                </button>
              </div>
            </div>
            <div className="name">{con.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
