import github from '../../assets/picture/github.png';
import instagram_icon from '../../assets/picture/instagram_icon.png';
import linkedin from '../../assets/picture/linkedin.png';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Header = ({refProject, refAbout, refContact}) => {
return ( 
    <div className="header">
        <div className="header__wrapper">
            <div className="header__nav">
                <p className="header__nav"><span className="bc">BC</span></p>
                <p className="header__nav" onClick={() => scrollToRef(refProject)}><span className="pink" >Project</span></p>
                <p className="header__nav" onClick={() => scrollToRef(refAbout)}>About Me</p>
                <p className="header__nav border header__contact" onClick={() => scrollToRef(refContact)}>Contact</p>
            </div>
            <div className="header__nav">
                <a href="https://github.com/gravvs" target="__blank"><img src={github} alt="facebook_icon" className="header__nav" /></a>
               <img src={instagram_icon} alt="instagram_icon" className="header__nav" />
                <a href="https://www.linkedin.com/in/bartosz-czenczek-4a518b220/" target="__blank"><img src={linkedin} alt="linkedIn_icon" className="header__nav" /></a>
            </div>
        </div>
    </div>
)
}

export default Header
