import brackets from '../../assets/picture/brackets.png';
import laptop from '../../assets/picture/laptop_icon.png';
import moje_zdjecie from '../../assets/picture/moje_zdjecie_p.jpg';
import AOS from 'aos';
AOS.init();

const MainElement = () => {
    return (
        <div className="main">
            <img src={brackets} alt="brackets" className="main__icon-1" />
            <img src={brackets} alt="brackets" className="main__icon-2" />
            <img src={laptop} alt="laptop" className="main__icon-3" />
            <img src={laptop} alt="laptop" className="main__icon-4" />
            <div className="main__text-wrapper">
                <div className="main__position">
                    <div className="main__letters">I'm</div>
                    <div className="main__text">
                        <p className="main__font">Front-end developer <span className="pink">&#x00026; </span>Programer</p>
                        <h1>BARTOSZ CZENCZEK</h1>
                    </div>
                </div>
                <div className="main__style-inline">
                <a href="#projects"><p className="pink margin border pointer" data-aos="example-anim2">My projects</p></a>
                <a href="#about_me"><p className="pink margin pointer">More about me</p></a>
                </div>
            </div>
            <div className="main__photo">
                <div className="main__img">
                    <img src={moje_zdjecie} alt="my_photo" height="200px" width="200px" /> 
                </div>
            </div>
        </div>
    )
}

export default MainElement