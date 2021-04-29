import AOS from 'aos';

const ContactSection = () => {
    return (
            <div className="contact">
                <form data-aos="slide-down" data-aos-anchor="#trigger-second">
                    <input type="text" name="name" id="name" placeholder="Name:" required/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="contact__email" placeholder="jan.kowalski@gmail.com"/>
                    <textarea id="message" name="message" placeholder="wpisz wiadomość"></textarea>
                    <input type="button" id="submit" value="Send >" className="contact__button pointer"/>
                </form>
            </div>
    )
}

export default ContactSection