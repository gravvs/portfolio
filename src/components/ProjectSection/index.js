import project_section1 from "../../assets/picture/portfolio_case_01.png";
import project_section2 from "../../assets/picture/portfolio_case_02.png";
import project_section3 from "../../assets/picture/portfolio_case_03.png";
import project_section4 from "../../assets/picture/portfolio_case_04.png";

const ProjectSection = () => {
  return (
    <div className="project_section__background">
      <div className="project_section__wrapper">
        <div className="project_section__content">
          <div className="project_section__content_skills" id="projects">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVA SCRIPT</p>
            <p>REACT</p>
            <p>LOREM</p>
            <p>IPSUM</p>
          </div>
          <div className="project_section__content_img">
            <img src={project_section1} alt="portfolio_img1" />
            <img src={project_section2} alt="portfolio_img2" />
            <img src={project_section3} alt="portfolio_img3" />
            <img src={project_section4} alt="portfolio_img4" />
          </div>
        </div>
        <div className="project_section__header">
          <h3>
          &#x0002F;&#x0002F;<span className="pink">Contact</span>
          </h3>
          <span id="trigger-second" className="trigger-second" />
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
