const HomeContainer4 = ({ projects }) => {
  return (
    <>
      <div className="home-container-4">
        <section>
          <h2 className="home-h2-1">Previous</h2>
          <h2 className="home-h2-2">Projects</h2>
        </section>

        <div className="project-cards">
          {projects.map((oneProject) => {
            return (
              <div className="individual-project" key={oneProject._id}>
                <div className="left">
                  <h2>{oneProject.title}</h2>
                  <img src={oneProject.image} />
                </div>
                <div className="right">
                  <h4>{oneProject.description}</h4>
                  <ul>
                    {oneProject.technologies.map((technology, index) => (
                      <li key={index}>
                        <p>{technology}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeContainer4;
