import triangle from "../../assets/picture/triangle.png";
import facebook_icon2 from "../../assets/picture/facebook_icon2.png";
import linkedin_icon2 from "../../assets/picture/linkedin_icon2.png";
import instagram_icon2 from "../../assets/picture/instagram_icon2.png";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ContactSection = ({ refHeader }) => {
  return (
    <div className="contact__footer">
      <div data-aos="slide-down" data-aos-anchor="#trigger-second">
        <div className="contact" id="contact">
          <form>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name:"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="contact__email"
              placeholder="jan.kowalski@gmail.com"
            />
            <textarea name="message" placeholder="wpisz wiadomość"></textarea>
            <input
              type="button"
              id="submit"
              value="Send >"
              className="contact__button pointer"
            />
          </form>
        </div>
        <div className="footer">
          <div className="footer__return">
            <img
              src={triangle}
              alt="traingle_img"
              width="35px"
              height="35px"
              onClick={() => scrollToRef(refHeader)}
            />
          </div>
          <div className="footer__img">
            <img
              src={facebook_icon2}
              alt="facebook_icon"
              width="30px"
              height="30px"
            />
            <img
              src={instagram_icon2}
              alt="instagram_icon"
              width="30px"
              height="30px"
            />
            <img
              src={linkedin_icon2}
              alt="linkedIn_icon"
              width="30px"
              height="30px"
            />
            <p className="bc">BC</p>
            <p className="footer__text">BARTOSZ CZENCZEK 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
