import triangle from '../../assets/picture/triangle.png';
import facebook_icon2 from '../../assets/picture/facebook_icon2.png';
import linkedin_icon2 from '../../assets/picture/linkedin_icon2.png';
import instagram_icon2 from '../../assets/picture/instagram_icon2.png';

const Footer = () => {
    return (
        <footer>
            <div className="triangle">
                <a href="#navigation"><img src={triangle} alt="traingle_img" width="30px" height="30px"/></a>
            </div>
            <div>
                <img src={facebook_icon2} alt="facebook_icon"width="30px"height="30px" />
                <img src={instagram_icon2} alt="instagram_icon"width="30px"height="30px" />
                <img src={linkedin_icon2} alt="linkedIn_icon"width="30px"height="30px" />
                <p><span className="bc_style">BC</span></p>
                <p>BARTOSZ CZENCZEK 2021</p> 
            </div>
        </footer>
    )
}
export default Footer