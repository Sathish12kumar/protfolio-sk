import "./CSS Styles/home.css";

const Home = () => {
  return (
    <div className="home-sec" id="Home">
      <div className="hidden">
        {[...Array(30)].map((_, idx) => (
          <div
            key={idx}
            className="svg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `actions ${Math.random() * 6 + 5}s infinite`,
            }}
          >
            <i className="fa-solid fa-star"></i>
          </div>
        ))}
      </div>
      <div className="flex-con">
        <div className="name">
          I'm <span>sathish</span>, <br /> Fullstack developer
        </div>
        <div className="info">
          <div className="blank"></div>
          <div className="skillSets">
            <div className="content">
              <p>
                I am a creative fresher web developer who builds responsive and
                visually engaging websites. I enjoy turning ideas into clean,
                functional designs that work seamlessly across all devices.
              </p>

              <p>
                I am motivated to contribute to real-world projects and
                collaborate with teams to create efficient, user-friendly, and
                impactful web solutions while growing as a professional
                developer.
              </p>

              <div className="links">
                <div className="btns">
                  <button>
                    <a href="#Contact">Contact me</a>
                  </button>
                  <button>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sathish120305@gmail.com&su=Looking%20Forward%20to%20Working%20Together">
                      Hire me
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <a href="#about">
          <i className="fa-solid fa-angles-down"></i>
          scroll down
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
