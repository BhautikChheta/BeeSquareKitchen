import React from 'react'
import emailjs from 'emailjs-com'
import '../../App.css'
import { Button } from '../Button'
import Footer from '../Footer'
import './ContactUs.css'

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_hsljnbk', e.target, 'user_oNxW20OkWhH6KhWghmGsO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div className="contactus-container">
            <img src="/images/contact-us2.svg" alt="Contact Bee Square Kitchen" className="background-image"/>
            <section className="user-inputs">
                <form onSubmit={sendEmail} className='user_form'>
                    <p className="user-inputs-heading">
                        <h1>We'd ♡ to serve you..!</h1>
                    </p>
                    <div className="input-areas">
                        <label htmlFor="Name">Name: <i class="fas fa-id-badge"></i> </label>
                        <input type="text" name="name" id="name" placeholder='Please Enter your Full Name' />
                    </div>
                    <div className="input-areas">
                        <label htmlFor="Phone">Phone: <i class="fas fa-phone-alt"></i> </label>
                        <input type="phone" name="phone" id="phone" placeholder='Please Enter your Contact Number' />
                    </div>
                    <div className="input-areas">
                        <label htmlFor="Email">Email: <i class="fas fa-at"></i> </label>
                        <input type="email" name="email" id="email" placeholder='Please Enter your Email Id' />
                    </div>
                    <div className="input-areas">
                        <label htmlFor="Message">Message: <i class="fas fa-file-alt"></i> </label>
                        <textarea name="message" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit"  className = 'btn btn--medium btn--outline' style={{color: '#242424', border: '1px solid #242424', borderRadius:'2px'}}>Submit</button>
                    {/* <Button type='submit' buttonSize='btn--medium' buttonStyle='btn--outline'>Submit</Button> */}
                </form>
            </section>
            <Footer></Footer>
        </div>
        // { <h1 className="contact-us">CONTACT US</h1>}
    )
}