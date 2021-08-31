import project_section1 from "../../assets/picture/portfolio_case_01.png";
import project_section2 from "../../assets/picture/portfolio_case_02.png";
import project_section3 from "../../assets/picture/portfolio_case_03.png";
import project_section4 from "../../assets/picture/portfolio_case_04.png";

const ProjectSection = () => {
  return (
    <div className="project" id="project">
      <div className="project__wrapper">
        <div className="project__content">
          <div className="project__skills">
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVA SCRIPT</p>
            <p>REACT</p>
            <p>LOREM</p>
            <p>IPSUM</p>
          </div>
          <div className="project__img">
            <div className="project__container">
              <img
                src={project_section1}
                alt="portfolio_img1"
                className="project__image"
              />
              <div className="project__overlay">
                <p className="project__text-1">QUIZ</p>
                <p className="project__text-2">ReactJs/ Sass/ Trivia Api</p>
                <a href="https://quiz-czenczek.netlify.app" className="project__button">View</a>
              </div>
            </div>
            <div className="project__container">
            <img src={project_section2} alt="portfolio_img2" className="project__image"/>
              <div className="project__overlay">
                <p className="project__text-1">Booking</p>
                <p className="project__text-2">GatsbyJS/ CSS/ GraphCMS</p>
                <a href="https://czenczek.netlify.app" className="project__button">View</a>
              </div>
            </div>
            <div className="project__container">
            <img src={project_section3} alt="portfolio_img3" className="project__image"/>
              <div className="project__overlay">
                <p className="project__text-1">FUTURE</p>
                <p className="project__text-2">ReactJs/ Typescript/ Sass</p>
                <button className="project__button">View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="project__footer">
          <h3>
            &#x0002F;&#x0002F;<span className="pink">Contact</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default ProjectSection;
