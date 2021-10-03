import {useState} from 'react'
import triangle from "../../assets/picture/triangle.png";
import facebook_icon2 from "../../assets/picture/facebook_icon2.png";
import linkedin_icon2 from "../../assets/picture/linkedin_icon2.png";
import instagram_icon2 from "../../assets/picture/instagram_icon2.png";
import {send} from 'emailjs-com';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ContactSection = ({ refHeader }) => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

const handleChange = (e) => {
  setToSend({ ...toSend, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault()
    send('service_f48wbt9', 'template_q53qx5b', toSend, 'user_FXQVQgb0BbmMgVTgh2tvN')
    .then(function(response) {
       console.warn('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.warn('FAILED...', error);
    })
  }

  return (
    <div className="contact__footer">
        <div className="contact" id="contact">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="Name:"
              value={toSend.from_name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='reply_to'
              id="email"
              className="contact__email"
              placeholder="jan.kowalski@gmail.com"
              value={toSend.reply_to}
              onChange={handleChange}
              required
            />
            <textarea 
            type="text"
            name="message" 
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            required
            />
            <button
              type="submit"
              id="submit"
              className="contact__button pointer"
            >Send</button>
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
    
  );
};

export default ContactSection;
