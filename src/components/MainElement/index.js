import brackets from '../../assets/picture/brackets.png';
import laptop from '../../assets/picture/laptop_icon.png';
import moje_zdjecie from '../../assets/picture/moje_zdjecie_p.jpg';
import AOS from 'aos';
AOS.init();

const MainElement = () => {
    return (
        <div className="main_element__wrapper">
            <img src={brackets} alt="brackets" className="bracket__1" />
            <img src={brackets} alt="brackets" className="bracket__2" />
            <img src={laptop} alt="laptop" className="laptop_icon__1" />
            <img src={laptop} alt="laptop" className="laptop_icon__2" />
            <div className="main_section">
                <div className="main_section_position">
                    <div className="main_section__letters">I'm</div>
                    <div className="main_section__text">
                        <p className="main_section__text--font">Front-end developer <span className="pink">&#x00026; </span>Programer</p>
                        <h1>BARTOSZ CZENCZEK</h1>
                    </div>
                </div>
                <div className="main_section__inline">
                <a href="#projects"><p className="pink margin border pointer" data-aos="example-anim2">My projects</p></a>
                <a href="#about_me"><p className="pink margin pointer header__nav__hover">More about me</p></a>
                </div>
            </div>
            <div className="main_element__photo">
                <div className="main_element__photo--img">
                    <img src={moje_zdjecie} alt="my_photo" height="200px" width="200px" /> 
                </div>
            </div>
        </div>
    )
}

export default MainElement