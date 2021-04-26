import facebook from '../../assets/picture/facebook.jpeg';
import instagram_icon from '../../assets/picture/instagram_icon.png';
import linkedin from '../../assets/picture/linkedin.png';

const Header = () => {
return ( 
    <div>    
        <div className="header__main__nav" id="navigation">
            <div className="header__nav">
                <p className="header__nav"><span className="bc_style">BC</span></p>
                <a href="#projects"><p className="header__nav header__nav__hover"><span className="pink" >Project</span></p></a>
                <a href="#about_me"><p className="header__nav header__nav__hover">About Me</p></a>
                <a href="#message"><p className="header__nav border header__contact header__nav__hover">Contact</p></a>
            </div>
            <div className="header__nav">
                <img src={facebook} alt="facebook_icon" className="header__nav" />
                <img src={instagram_icon} alt="instagram_icon" className="header__nav" />
                <img src={linkedin} alt="linkedIn_icon" className="header__nav" />
            </div>
        </div>
    </div>
)
}

export default Header
