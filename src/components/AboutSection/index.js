import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ duration: 1200 });

const AboutSection = () => {
  return (
    <div className="about" id="about">
      <div className="about__background">
        <div data-aos="slide-up" data-aos-anchor="#trigger" className="about__slide">
          <div className="about__content-wrapper">
            <div className="about__header">
              <div className="about__header-dot space">
                <span className="about__header-dot red pointer"></span>
                <span className="about__header-dot yellow pointer"></span>
                <span className="about__header-dot green pointer"></span>
              </div>
              <div className="space">
                <p className="about__text-about">
                  &#x0002F;&#x0002F;&#x0002F; About
                </p>
              </div>
            </div>
            <div className="about__shadow">
              <div>
                <h2>
                  &#x0002F;&#x0002F;<span className="pink">About</span>
                </h2>
              </div>
              <div className="about__border-left">
                <div className="about__text-header">
                  <h3>
                    &lt;&#x0002F;<span className="pink">Me</span>&gt;
                  </h3>
                  <h3>
                    &lt;&#x0002F;<span className="pink">Skills</span>&gt;
                  </h3>
                </div>
                <div className="about__text-wrapper">
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
                  <div className="about__skills">
                    <div className="about__column">
                      <div>
                        <p className="about__width98">
                          <span className="about__margin">HTML</span>
                        </p>
                      </div>
                      <div>
                        <p className="about__width90">
                          <span className="about__margin">CSS</span>
                        </p>
                      </div>
                      <div>
                        <p className="about__width75">
                          <span className="about__margin">JAVA SCRIPT</span>
                        </p>
                      </div>
                      <div>
                        <p className="about__width90">
                          <span className="about__margin">REACT</span>
                        </p>
                      </div>
                      <div>
                        <p className="about__width90">
                          <span className="about__margin">HTML</span>
                        </p>
                      </div>
                      <div>
                        <p className="about__width90">
                          <span className="about__margin">HTML</span>
                        </p>
                      </div>
                    </div>
                    <div className="about__numbers">
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
      <div className="about__footer-border"></div>
    </div>
  );
};

export default AboutSection;
