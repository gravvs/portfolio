import AOS from 'aos';

const ContactSection = () => {
    return (
        <div className="contact_section" >
            <div className="contact_section_form">
                <form data-aos="slide-down" data-aos-anchor="#trigger-second">
                    <input type="text" name="name" id="name" className="form" placeholder="Name:" required/>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" className="form" placeholder="jan.kowalski@gmail.com"/>
                    <textarea id="message" name="message" className="form" placeholder="wpisz wiadomość"></textarea>
                    <input type="button" id="submit" value="Send >" className="submit-button pointer"/>
                </form>
            </div>
        </div>
    )
}

export default ContactSection