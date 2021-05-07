import brackets from '../../assets/picture/brackets.png';
import laptop from '../../assets/picture/laptop_icon.png';
import moje_zdjecie from '../../assets/picture/moje_zdjecie_p.jpg';
import AOS from 'aos';
AOS.init();

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const MainElement = ({refProject, refAbout}) => {
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
                <p className="pink margin border pointer" data-aos="example-anim2" onClick={() => scrollToRef(refProject)}>My projects</p>
                <p className="pink margin pointer" onClick={() => scrollToRef(refAbout)}>More about me</p>
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