import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1200 });

const AboutSection = () => {
  return (
    <div className="about_section__wrapper">
      <div className="about_section__background" id="about_me">
        <div data-aos="slide-up" data-aos-anchor="#trigger">
          <div className="about_section">
            <div className="about_section__header">
              <div className="about_section__header--dot space">
                <span className="about_section__header--dot red pointer"></span>
                <span className="about_section__header--dot yellow pointer"></span>
                <span className="about_section__header--dot green pointer"></span>
              </div>
              <div className="space">
                <p className="about_section--about">
                  &#x0002F;&#x0002F;&#x0002F; About
                </p>
              </div>
            </div>
            <div className="about_section__shadow">
              <div>
                <h2>
                  &#x0002F;&#x0002F;<span className="pink">About</span>
                </h2>
              </div>
              <div className="about_section__border_left">
                <div className="about_section__text_header">
                  <h3>
                    &lt;&#x0002F;<span className="pink">Me</span>&gt;
                  </h3>
                  <h3>
                    &lt;&#x0002F;<span className="pink">Skills</span>&gt;
                  </h3>
                </div>
                <div className="about_section__content_wrapper">
                  <div>
                    <pre>{`
    {
    "Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Pellentesque finibus tellus lectus,
    eget tempus nibh euismod imperdiet"

    "Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.
    Pellentesque finibus tellus lectus,
    eget tempus nibh euismod imperdiet."
    }
                            `}</pre>
                  </div>
                  <div className="about_section__content_skills">
                    <div className="about_section__content_skills--column">
                      <div>
                        <p className="width98">
                          <span className="about_section__content_skills--margin">HTML</span>
                        </p>
                      </div>
                      <div>
                        <p className="width90">
                          <span className="about_section__content_skills--margin">CSS</span>
                        </p>
                      </div>
                      <div>
                        <p className="width75">
                          <span className="about_section__content_skills--margin">JAVA SCRIPT</span>
                        </p>
                      </div>
                      <div>
                        <p className="width90">
                          <span className="about_section__content_skills--margin">REACT</span>
                        </p>
                      </div>
                      <div>
                        <p className="width90">
                          <span className="about_section__content_skills--margin">HTML</span>
                        </p>
                      </div>
                      <div>
                        <p className="width90">
                          <span className="about_section__content_skills--margin">HTML</span>
                        </p>
                      </div>
                    </div>
                    <div className="about_section__content_skills--numbers">
                      <div id="trigger" className="trigger" />
                      <p>98%</p>
                      <p>90%</p>
                      <p>75%</p>
                      <p>90%</p>
                      <p>90%</p>
                      <p>90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section__footer--border"></div>
    </div>
  );
};

export default AboutSection;
