import facebook from '../../assets/picture/facebook.jpeg';
import instagram_icon from '../../assets/picture/instagram_icon.png';
import linkedin from '../../assets/picture/linkedin.png';

const Header = () => {
return ( 
    <div>    
        <div className="main_main_nav">
            <div className="main_nav">
                <p className="main_nav"><span className="bc_style" >BC</span></p>
                <p className="main_nav"><span className="pink" >Project</span></p>
                <p className="main_nav">About Me</p>
                <a href="#message"><p className="main_nav border contact">Contact</p></a>
            </div>
            <div className="main_nav">
                <img src={facebook} alt="facebook_icon" className="main_nav" />
                <img src={instagram_icon} alt="instagram_icon" className="main_nav" />
                <img src={linkedin} alt="linkedIn_icon" className="main_nav" />
            </div>
        </div>
    </div>
)
}

export default Header
