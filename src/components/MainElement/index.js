import brackets from '../../assets/picture/brackets.png';
import moje_zdjecie from '../../assets/picture/moje_zdjecie_p.jpg';
import AOS from 'aos';
AOS.init();

const MainElement = () => {
    return (
        <div className="main_main_section">
            <img src={brackets} alt="brackets" className="bracket1" />
            <img src={brackets} alt="brackets" className="bracket2" />
            <div className="main_section">
                <div className="main_section_position">
                    <div className="i_m">I'm</div>
                    <div className="main_section_text">
                        <p className="front">Front-end developer <span className="pink">& </span>Programer</p>
                        <h1>BARTOSZ CZENCZEK</h1>
                    </div>
                </div>
                <div className="main_section_inline">
                    <p className="pink margin border pointer" data-aos="example-anim2">My projects</p>
                    <p className="pink margin pointer">More about me</p>
                </div>
            </div>
            <div className="my_photo">
                <div className="my_photo_img">
                    <img src={moje_zdjecie} alt="my_photo" height="200px" width="200px" /> 
                </div>
            </div>
        </div>
    )
}

export default MainElement