const HomeContainer1 = () => {
  return (
    <>
      <div className="home-container">
        {/* <h1>LEARNING, GROWING, WEB DEVELOPING</h1> */}
        <div className="card">
          <div className="card-left">
            <div className="card-left-1">
              <h2>Jaime Alcaraz</h2>
              <h3>Full Stack Developer</h3>
            </div>
            <div className="card-left-2">
              <p>
                My name is Jaime Alcaraz. I am an enthusiast Full Stack
                developer based in Spain. I love facing new challenges when
                trying to solve the conandrums of the web. I have experience
                working with technologies such as JavaScript, HTML, CSS, React
                and GitHub. Before converting into a Web Dev I worked as a
                CrossFit coach and dietitian for a couple of years.
              </p>
            </div>
          </div>

          <div className="card-right">
            <img src="images/JaimeAlcaraz.jpeg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer1;
