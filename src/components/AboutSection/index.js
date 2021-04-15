import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({duration: 1200});


const AboutSection = () => {
    return (
        <div className="greyow">
        <div className="white" >
            <div data-aos="slide-up" data-aos-anchor="#trigger">
            <div className="about_section" >
                <div className="about_section_header">
                    <div className="dot space">
                        <span className="dot red pointer"></span>
                        <span className="dot yellow pointer"></span>
                        <span className="dot green pointer"></span>
                    </div>
                    <div className="space">
                        <p className="about">&#x0002F;&#x0002F;&#x0002F; About</p>
                    </div>
                </div>
                <div className="shadow">
                    <div>
                        <h2>&#x0002F;&#x0002F;<span className="pink">About</span></h2>
                    </div>
                    <div className = "about_border_left">
                        <div className="h3_section">
                            <h3>&lt;&#x0002F;<span className="pink">Me</span>&gt;</h3>
                            <h3>&lt;&#x0002F;<span className="pink">Skills</span>&gt;</h3>
                        </div>
                        <div className="about_section_content">
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
                            <div className="skills_bar">
                                <div className="skills_bar_column">
                                    <div><p className="w98"><span className="skills_margin">HTML</span></p></div>
                                    <div><p className="w90"><span className="skills_margin">CSS</span></p></div>
                                    <div><p className="w75"><span className="skills_margin">JAVA SCRIPT</span></p></div>
                                    <div><p className="w90"><span className="skills_margin">REACT</span></p></div>
                                    <div><p className="w90"><span className="skills_margin">HTML</span></p></div>
                                    <div><p className="w90"><span className="skills_margin">HTML</span></p></div>
                                </div>
                                <div className="skills_bar_number">
                                    <div id="trigger"></div>
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
        <div className="about_border"></div>
        </div>
    )
}

export default AboutSection