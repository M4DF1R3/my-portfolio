import { Row } from "react-bootstrap";
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_mlirteh', 'template_55jwdsb', form.current, 'fizrD8lJNH9JBFBC2')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <section id="contact">
            <div className="contact-list">
                <Row xs={1} md={2} lg={3} className="contact-row">
                    <div className="contact-col">
                        <h1 className="contact-header">Send Me A Message</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li>
                                    <input className="my-contact" placeholder="Your Name" type="text" name="name" required />
                                </li>
                                <li>
                                    <input className="my-contact" placeholder="Your Email" type="email" name="email" required />
                                </li>
                                <li>
                                    <input className="my-contact" placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea className="message" placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <div className="contact-col">
                        <h1 className="contact-header">
                            Get In Touch
                        </h1>
                        <p className="blurb">
                            Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                            Simply fill the from and send me an email.
                        </p>
                        <span>
                            <a href="https://github.com/M4DF1R3" target="_blank">
                                <FaGithub />
                            </a>
                            {` `}
                            <a href="https://www.linkedin.com/in/cq4/" target="_blank">
                                <FaLinkedin />
                            </a>
                            

                        </span>
                    </div>
                </Row>
            </div>
        </section>
    );
}

export default Contact
